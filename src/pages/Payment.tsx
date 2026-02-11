import useAuthContext from "../context/hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import { useStore } from "../zustand/store";
import CartSummary from "../components/CartSummary";
import InputAdress from "../components/InputAdress";
import { createOrder } from "../actions/createOrder";
import { useState, useCallback } from "react";
import Title from "../components/Title";
import OrderStatus from "../components/OrderStatus";

const Payment = () => {
  const { token } = useAuthContext();
  const cartItems = useStore((store) => store.cartItems);
  const totalPrice = useStore((store) => store.totalPrice);
  const getProductQuantity = useStore((store) => store.getProductQuantity);
  const clearCart = useStore((store) => store.clearCart);

  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePlaceOrder = useCallback(async () => {
    if (!address.trim()) {
      setError("Please enter a delivery address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const products = cartItems.map((item) => ({
        _id: item.product._id,
        quantity: getProductQuantity(item.product._id),
      }));

      const orderData = {
        products,
        address: address.trim(),
        price: totalPrice,
      };
      await createOrder(orderData, token!);
      setSuccessMessage("Order placed successfully!");
      clearCart();
    } catch (error) {
      setError("Failed to place order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [address, totalPrice, token, clearCart]);

  return !token ? (
    <Navigate to="/user/login" />
  ) : (
    <div className="flex flex-col mx-20  ">
      <div className="flex justify-center">
        <Title content="Checkout" />
      </div>
      <div className="lg:flex lg:justify-center lg:gap-50 mt-5 lg:items-center">
        <CartSummary
          cartItems={cartItems}
          totalPrice={totalPrice}
          getProductQuantity={getProductQuantity}
          mode="checkout"
        />
        <div className="flex flex-col items-center mt-10 lg:mt-0 bg-gray-100 px-10 py-8 rounded-xl shadow ">
          <InputAdress onAddressChange={setAddress} />
          <OrderStatus error={error} successMessage={successMessage} />
          <button
            onClick={handlePlaceOrder}
            disabled={isLoading || cartItems.length === 0}
            className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-gray-300 hover:text-black transition-colors duration-300 cursor-pointer my-5 "
          >
            {isLoading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
