import Cookies from "js-cookie";
import useAuthContext from "../../context/hooks/useAuthContext";

const ButtonLogout = () => {
  const { setToken, setIsAdmin } = useAuthContext();

  const handleLogout = () => {
    Cookies.remove("token");
    if (Cookies.get("isAdmin")) {
      Cookies.remove("isAdmin");
    }
    if (setIsAdmin) {
      setIsAdmin(false);
    }
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
