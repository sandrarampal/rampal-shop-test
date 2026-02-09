import { Link } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import useAuthContext from "../context/hooks/useAuthContext";
import ButtonLogout from "./ButtonLogout";

const Header = () => {
  const { token } = useAuthContext();

  console.log("token", token);

  return (
    <div className="h-20 bg-amber-600 flex items-center px-5 relative">
      <Link to="/">
        <p>Shop</p>
      </Link>
      {!token && (
        <div className="flex gap-5 absolute right-5 top-5">
          <ButtonLink content="Login" path="/user/login" />
          <ButtonLink content="Signup" path="/user/signup" />
        </div>
      )}
      {token && <ButtonLogout />}
    </div>
  );
};

export default Header;
