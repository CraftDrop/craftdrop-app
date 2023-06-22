import { Input } from "@chakra-ui/react";
import Layout from "../layout";
import ButtonPrimary from "../components/common/buttonPrimary";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import * as services from "../services/userService";
import { useState } from "react";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});

  const schema = {
    email: Joi.string().email().min(5).required().label("email"),
    password: Joi.string().min(6).required().label("password"),
    full_name: Joi.string().min(6).required().label("full name"),
    username: Joi.string().min(4).required().label("username"),
  };

  const handleChange = ({ currentTarget: input }) => {
    const error = { ...errors };
    const errorMessage = validateOnChange(input);

    if (errorMessage) {
      error[input.name] = errorMessage;
    } else {
      delete error[input.name];
    }

    const data = { ...user };
    data[input.name] = input.value;
    setUser(data);
    setErrors(error);
  };

  const validateOnChange = ({ name, value }) => {
    const obj = { [name]: value };
    const schemaValidate = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemaValidate);
    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(user, schema, options);
    if (!result.error) return null;
    const errors = {};
    console.log(result.error.details);
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    console.log("user", user);
    // ...
    try {
      const { data: jwt } = await services.register(user);

      localStorage.setItem("token", jwt.access_token);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error = { ...errors };
        error.email = ex.response.data.error;
        setErrors(error);
      }
    }

    // ...
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-[35rem] lg:h-[45rem]">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-2xl font-bold">Create Account</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 min-w-[20rem]"
          >
            <Input
              value={user.full_name}
              name="full_name"
              onChange={handleChange}
              placeholder="Full Name"
            />

            <Input
              type="text"
              value={user.username}
              name="username"
              onChange={handleChange}
              placeholder="Username"
            />
            <div className="text-red-500 text-start">{errors?.username}</div>

            <Input
              type="email"
              value={user.email}
              name="email"
              onChange={handleChange}
              placeholder="Email address"
            />
            <div className="text-red-500 text-start">{errors?.email}</div>

            <Input
              value={user.password}
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            <div className="text-red-500 text-start">{errors?.password}</div>

            <ButtonPrimary label="Log In" />
            <div className="flex justify-between">
              <Link to="/login">
                <h1>Already have an account? Log in</h1>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
