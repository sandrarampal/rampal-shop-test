import axios from "axios";
import Cookies from "js-cookie";
import type { AuthFormState } from "../types";

const createUser = async (
  previousState: AuthFormState,
  formdata: FormData,
): Promise<AuthFormState> => {
  try {
    const username = formdata.get("username");
    const email = formdata.get("email");
    const password = formdata.get("password");
    if (!username || !email || !password) {
      return { ...previousState, error: "All fields are required" };
    }
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}user/signup`,
      {
        username,
        email,
        password,
      },
    );
    const token = response.data.token;
    const isAdmin = response.data.admin || false;
    Cookies.set("isAdmin", isAdmin.toString());
    Cookies.set("token", token);
    return { ...previousState, isSuccess: true, isAdmin: isAdmin };
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("409")) {
        return { ...previousState, error: "Email already in use" };
      } else {
        return { ...previousState, error: error.message };
      }
    } else {
      return { ...previousState, error: "Une erreur est survenue" };
    }
  }
};

export default createUser;
