import AuthForm from "../components/AuthForm";

const Signup = () => {
  return (
    <div className="flex flex-col items-center mt-30 border border-gray-300 rounded p-10 w-fit mx-auto shadow-lg">
      <h2 className="text-3xl mb-10">Sign Up</h2>
      <AuthForm mode="signup" />
    </div>
  );
};

export default Signup;
