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
    const response = await axios.post("http://localhost:4000/user/login", {
      email,
      password,
    });
    const token = response.data.token;
    Cookies.set("token", token);
    const isAdmin = response.data.admin || false;

    return { ...previousState, isSuccess: true, isAdmin };
  } catch (error) {
    if (error instanceof Error) {
      return { ...previousState, error: error.message };
    } else {
      return { ...previousState, error: "Une erreur est survenue" };
    }
  }
};

export default loginUser;
