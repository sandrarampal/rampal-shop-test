import { Navigate } from "react-router-dom";
import useAuthContext from "../context/hooks/useAuthContext";
import Orders from "../components/Orders";

const Admin = () => {
  const { isAdmin } = useAuthContext();

  if (!isAdmin) {
    return <Navigate to="/user/login" />;
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl m-4">Administration Portal</h2>
      <h3 className="text-xl mb-4">Orders</h3>
      <Orders />
    </div>
  );
};

export default Admin;
