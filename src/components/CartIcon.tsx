import { Link } from "react-router-dom";
import { useStore } from "../zustand/store";
import { FaShoppingCart } from "react-icons/fa";
const CartIcon = () => {
  const cartCounter = useStore((store) => store.cartCounter);

  return (
    <Link to="/cart">
      <div className="relative">
        <p className="absolute bg-red-500 rounded-2xl w-5 h-5 flex items-center justify-center bottom-4 left-4 text-xs text-white">
          {cartCounter}
        </p>
        <FaShoppingCart className="text-2xl" />
      </div>
    </Link>
  );
};

export default CartIcon;
