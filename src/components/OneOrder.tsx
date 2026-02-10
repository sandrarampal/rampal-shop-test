import type { TOrder } from "../types";
import { useState } from "react";
import axios from "axios";
import useAuthContext from "../context/hooks/useAuthContext";

const OneOrder = ({ order }: { order: TOrder }) => {
  const [isDelivered, setIsDelivered] = useState(order.delivered);
  const { token } = useAuthContext();

  const handleDeliveryChange = async () => {
    try {
      await axios.put(
        `http://localhost:4000/orders/mark-delivered/${order._id}`,
        { delivered: !isDelivered },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      console.error("Error updating delivery status:", error);
    }
    setIsDelivered((prev) => !prev);
  };

  return (
    <div key={order._id} className="bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="text-lg font-semibold mb-2">Order ID: {order._id}</h3>
      <p className="text-gray-600 mb-1">User: {order.owner.email}</p>
      <p className="text-gray-600 mb-1">Total: {order.price.toFixed(2)} €</p>
      <div className="flex items-center gap-4">
        <p className="text-gray-600 ">Delivered:</p>
        <input type="checkbox" onChange={handleDeliveryChange} />
      </div>
    </div>
  );
};

export default OneOrder;
