import useAuthContext from "../context/hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import { useStore } from "../zustand/store";
import CartSummary from "../components/CartSummary";
import InputAdress from "../components/InputAdress";
import { createOrder } from "../actions/createOrder";
import { useState } from "react";

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

  const handlePlaceOrder = async () => {
    if (!address.trim()) {
      setError("Please enter a delivery address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const products = cartItems.map((item) => ({
        productId: item.product._id,
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
  };

  return !token ? (
    <Navigate to="/user/login" />
  ) : (
    <div>
      <CartSummary
        cartItems={cartItems}
        totalPrice={totalPrice}
        getProductQuantity={getProductQuantity}
      />
      <InputAdress onAddressChange={setAddress} />

      {error && <p className="text-red-600 text-sm">{error}</p>}
      {successMessage && (
        <p className="text-green-600 text-sm">{successMessage}</p>
      )}
      <button
        onClick={handlePlaceOrder}
        disabled={isLoading || cartItems.length === 0}
        className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700"
      >
        {isLoading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
};

export default Payment;
