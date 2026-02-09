import axios from "axios";

const createUser = async (
  previousState: { error: string | null; isSuccess: boolean },
  formdata: FormData,
) => {
  try {
    const username = formdata.get("username");
    const email = formdata.get("email");
    const password = formdata.get("password");
    await axios.post("http://localhost:4000/user/signup", {
      username,
      email,
      password,
    });
    return { ...previousState, isSuccess: true };
  } catch (error) {
    if (error instanceof Error) {
      return { ...previousState, error: error.message };
    } else {
      return { ...previousState, error: "Une erreur est survenue" };
    }
  }
};

export default createUser;
