import Cookies from "js-cookie";
import useAuthContext from "../../context/hooks/useAuthContext";

const ButtonLogout = () => {
  const { setToken } = useAuthContext();

  const handleLogout = () => {
    Cookies.remove("token");
    setToken(null);
  };

  return (
    <button
      className="bg-green-300 p-3 rounded-lg cursor-pointer"
      onClick={handleLogout}
    >
      <p>Logout</p>
    </button>
  );
};

export default ButtonLogout;
