import { Link } from "react-router-dom";
import ButtonLink from "./buttons/ButtonLink";
import useAuthContext from "../context/hooks/useAuthContext";
import ButtonLogout from "./buttons/ButtonLogout";
import CartIcon from "./CartIcon";

const Header = () => {
  const { token } = useAuthContext();

  return (
    <div className="h-20 bg-amber-600 flex items-center px-5  gap-5 sticky top-0 z-10">
      <Link to="/">
        <p>Shop</p>
      </Link>
      <CartIcon />
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
