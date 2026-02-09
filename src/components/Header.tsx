import { Link } from "react-router-dom";
import ButtonLink from "./ButtonLink";

const Header = () => {
  return (
    <div className="h-20 bg-amber-600 flex items-center px-5 relative">
      <Link to="/">
        <p>Shop</p>
      </Link>
      <div className="flex gap-5 absolute right-5 top-5">
        <ButtonLink content="Login" path="/login" />
        <ButtonLink content="Signup" path="/signup" />
      </div>
    </div>
  );
};

export default Header;
