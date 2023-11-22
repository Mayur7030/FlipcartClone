import axios from "axios";
const url = "http://localhost:8000";

export const authenticateSignUp = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data);
  } catch (error) {
    console.log("Error while calling signuo api", error);
  }
};
