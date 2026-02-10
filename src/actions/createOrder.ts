import axios from "axios";
import type { TOrderProduct } from "../types";

interface CreateOrderRequest {
  products: TOrderProduct[];
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
      "http://site--rampal-shop-backend--96jcjn4jx467.code.run/orders",
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
