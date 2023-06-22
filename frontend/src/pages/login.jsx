import { Input } from "@chakra-ui/react";
import Joi from "joi-browser";
import Layout from "../layout";
import ButtonPrimary from "../components/common/buttonPrimary";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import { useState } from "react";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});

  const schema = {
    email: Joi.string().email().min(5).required().label("email"),
    password: Joi.string().min(6).required().label("password"),
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

    console.log("submitted");
    // ...
    try {
      const data = user;
      const { data: jwt } = await auth.login(user.email, user.password);

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
          <h1 className="text-2xl font-bold">Log In</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 min-w-[20rem]"
          >
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={user.email}
              onChange={handleChange}
              errors={errors.email}
            />
            <div className="text-red-500 text-start">{errors?.email}</div>

            <Input
              type="password"
              placeholder="Password"
              value={user.password}
              name="password"
              onChange={handleChange}
            />
            <div className="text-red-500 text-start">{errors?.password}</div>

            <ButtonPrimary label="Log In" />
            <div className="flex justify-between">
              <h1 className="text-left">Forgot Password?</h1>
              <Link to="/create-account">
                <h1 className="text-left">Sign Up</h1>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
