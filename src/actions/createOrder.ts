import axios from "axios";

interface OrderProduct {
  productId: string;
  quantity: number;
}

interface CreateOrderRequest {
  products: OrderProduct[];
  address: string;
  price: number;
}

export const createOrder = async (
  orderData: CreateOrderRequest,
  token: string,
) => {
  try {
    console.log(token);
    const response = await axios.post(
      "http://localhost:4000/orders",
      orderData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (error) {
    throw new Error("Failed to create order");
  }
};
