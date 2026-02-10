import { Navigate } from "react-router-dom";
import useAuthContext from "../context/hooks/useAuthContext";
import Orders from "../components/Orders";

const Admin = () => {
  const { isAdmin } = useAuthContext();

  if (!isAdmin) {
    return <Navigate to="/user/login" />;
  }
  return (
    <div>
      <h2>Administration Portal</h2>
      <h3>Orders</h3>
      <Orders />
    </div>
  );
};

export default Admin;
