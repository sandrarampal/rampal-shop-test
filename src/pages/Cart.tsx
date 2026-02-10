import { useStore } from "../zustand/store";
import useAuthContext from "../context/hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import CartSummary from "../components/CartSummary";

const Cart = () => {
  const cartItems = useStore((store) => store.cartItems);
  const totalPrice = useStore((store) => store.totalPrice);
  const getProductQuantity = useStore((store) => store.getProductQuantity);
  const navigate = useNavigate();
  const { token } = useAuthContext();

  const handleCheckout = () => {
    if (!token) {
      navigate("/user/login");
    } else {
      navigate("/payment");
    }
  };

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="mb-6">Your cart is empty</p>
      ) : (
        <CartSummary
          cartItems={cartItems}
          totalPrice={totalPrice}
          getProductQuantity={getProductQuantity}
        />
      )}
      <button
        className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-gray-200 hover:text-black hover:border transition-colors duration-300 cursor-pointer"
        onClick={handleCheckout}
      >
        Go to Checkout
      </button>
    </div>
  );
};

export default Cart;
