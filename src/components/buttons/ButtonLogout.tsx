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
      className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-gray-200 hover:text-black transition-colors duration-300 cursor-pointer"
      onClick={handleLogout}
    >
      <p>Logout</p>
    </button>
  );
};

export default ButtonLogout;
