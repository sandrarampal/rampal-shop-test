import ButtonSubmit from "./ButtonSubmit";
import { useActionState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import createUser from "../actions/createUser";
import Input from "./Input";

const SignUpForm = () => {
  const [formState, formAction, isPending] = useActionState(createUser, {
    error: null,
    isSuccess: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (formState.isSuccess) {
      navigate("/");
    }
  }, [formState.isSuccess, navigate]);

  return (
    <div>
      <form action={formAction}>
        <Input type="text" placeholder="Username" name="username" />
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Password" name="password" />
        <ButtonSubmit content="Sign Up" />
        {isPending && <p>Chargement...</p>}
        {formState.error && <p style={{ color: "red" }}>{formState.error}</p>}
      </form>
    </div>
  );
};

export default SignUpForm;
