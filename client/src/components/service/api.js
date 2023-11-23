import axios from "axios";
const url = "http://localhost:8000";

export const authenticateSignUp = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data);
  } catch (error) {
    console.log("Error while calling signup api", error);
  }
};


export const authenticateLogin  = async (data) => {
  try {
    return await axios.post(`${url}/login`, data);
  } catch (error) {
    console.log("Error while calling login api", error);
    return error.response
  }
};
