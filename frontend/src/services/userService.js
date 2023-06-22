import http from "./httpService";

export function register(user) {
  const apiEndPoint = "https://lucasbolt.pythonanywhere.com/api";

  return http.post(`${apiEndPoint}/register/`, {
    full_name: user.full_name,
    email: user.email,
    password: user.password,
    username: user.username,
  });
}
