import AuthForm from "../components/AuthForm";
import Title from "../components/Title";

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-30 border border-gray-300 rounded p-10 w-fit mx-auto shadow-lg bg-gray-100">
      <Title content="Login" />
      <AuthForm mode="login" />
    </div>
  );
};

export default Login;
