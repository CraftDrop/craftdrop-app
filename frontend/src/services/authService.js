import jwtDecode from "jwt-decode";
import config from "../config.json";
import http from "./httpService";

const apiEndPoint = "https://lucasbolt.pythonanywhere.com/api";
const tokenKey = "token";

export async function login(email, password) {
  return http.post(`${apiEndPoint}/login/`, {
    email,
    password,
  });
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  if (localStorage.getItem(tokenKey)) {
    localStorage.removeItem(tokenKey);
  }
}

export async function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const headers = {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    };
    const response = await http.get(`${apiEndPoint}/user/`, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// export function getJwt() {
//   return localStorage.getItem(tokenKey);
// }

export default {
  login,
  logout,
  //   loginWithJwt,
  getCurrentUser,
  //   getJwt,
};
