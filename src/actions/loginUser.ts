import axios from "axios";
import Cookies from "js-cookie";

const loginUser = async (
  previousState: { error: string | null; isSuccess: boolean },
  formdata: FormData,
) => {
  try {
    const email = formdata.get("email");
    const password = formdata.get("password");
    const response = await axios.post("http://localhost:4000/user/login", {
      email,
      password,
    });
    const token = response.data.token;
    Cookies.set("token", token);
    return { ...previousState, isSuccess: true };
  } catch (error) {
    if (error instanceof Error) {
      return { ...previousState, error: error.message };
    } else {
      return { ...previousState, error: "Une erreur est survenue" };
    }
  }
};

export default loginUser;
