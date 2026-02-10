import ButtonSubmit from "./buttons/ButtonSubmit";
import { useActionState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginUser from "../actions/loginUser";
import createUser from "../actions/createUser";
import Input from "./Input";
import useAuthContext from "../context/hooks/useAuthContext";
import Cookies from "js-cookie";
import type { AuthFormState } from "../types";

interface AuthFormProps {
  mode: "login" | "signup";
}

function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === "login";
  const action = isLogin ? loginUser : createUser;
  const { setToken, setIsAdmin } = useAuthContext();

  const [formState, formAction, isPending] = useActionState(action, {
    error: null,
    isSuccess: false,
  } as AuthFormState);

  const navigate = useNavigate();

  useEffect(() => {
    if (formState.isSuccess) {
      setToken(Cookies.get("token") || null);
      if (formState.isAdmin !== undefined) {
        setIsAdmin?.(formState.isAdmin);
      }
      navigate("/");
    }
  }, [formState.isSuccess, navigate, setToken, setIsAdmin]);

  return (
    <div>
      <form action={formAction} className="flex flex-col items-center gap-6">
        <Input type="email" placeholder="Email" name="email" />
        {!isLogin && (
          <Input type="username" placeholder="username" name="username" />
        )}
        <Input type="password" placeholder="Password" name="password" />
        <ButtonSubmit content={isLogin ? "Login" : "Sign Up"} />
        {isPending && <p>Chargement...</p>}
        {formState.error && <p style={{ color: "red" }}>{formState.error}</p>}
      </form>
    </div>
  );
}

export default AuthForm;
