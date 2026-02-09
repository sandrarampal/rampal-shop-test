import ButtonSubmit from "./ButtonSubmit";
import { useActionState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginUser from "../actions/loginUser";
import createUser from "../actions/createUser";
import Input from "./Input";

interface AuthFormProps {
  mode: "login" | "signup";
}

function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === "login";
  const action = isLogin ? loginUser : createUser;

  const [formState, formAction, isPending] = useActionState(action, {
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
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Password" name="password" />
        {!isLogin && (
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
        )}
        <ButtonSubmit content={isLogin ? "Login" : "Sign Up"} />
        {isPending && <p>Chargement...</p>}
        {formState.error && <p style={{ color: "red" }}>{formState.error}</p>}
      </form>
    </div>
  );
}

export default AuthForm;
