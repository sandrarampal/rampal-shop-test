import axios from "axios";
import Cookies from "js-cookie";
import type { AuthFormState } from "../types";

const loginUser = async (
  previousState: AuthFormState,
  formdata: FormData,
): Promise<AuthFormState> => {
  try {
    const email = formdata.get("email");
    const password = formdata.get("password");
    if (!email || !password) {
      return { ...previousState, error: "All fields are required" };
    }
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}user/login`,
      {
        email,
        password,
      },
    );

    const token = response.data.token;
    Cookies.set("token", token);
    const isAdmin = response.data.admin || false;
    Cookies.set("isAdmin", isAdmin.toString());

    return { ...previousState, isSuccess: true, isAdmin };
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("401")) {
        return { ...previousState, error: "Incorrect email or password" };
      } else {
        return { ...previousState, error: error.message };
      }
    } else {
      return { ...previousState, error: "An error has occured" };
    }
  }
};

export default loginUser;
