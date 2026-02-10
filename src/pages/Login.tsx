import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-30 border border-gray-300 rounded p-10 w-fit mx-auto shadow-lg bg-white">
      <h2 className="text-3xl mb-10">Login</h2>
      <AuthForm mode="login" />
    </div>
  );
};

export default Login;
