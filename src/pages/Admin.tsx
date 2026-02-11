import { Navigate } from "react-router-dom";
import useAuthContext from "../context/hooks/useAuthContext";
import Orders from "../components/Orders";
import Title from "../components/Title";

const Admin = () => {
  const { isAdmin } = useAuthContext();

  if (!isAdmin) {
    return <Navigate to="/user/login" />;
  }
  return (
    <div className="flex flex-col items-center">
      <Title content="Admin Dashboard" />
      <Orders />
    </div>
  );
};

export default Admin;
