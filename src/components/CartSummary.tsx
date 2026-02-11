import type { TProduct } from "../types";
import CounterQuantity from "./CounterQuantity";

interface CartSummaryProps {
  cartItems: {
    product: TProduct;
  }[];
  totalPrice: number;
  getProductQuantity: (productId: string) => number;
  mode: "cart" | "checkout";
}

const CartSummary = ({
  cartItems,
  totalPrice,
  getProductQuantity,
  mode,
}: CartSummaryProps) => {
  const isCartMode = mode === "cart";
  return (
    <div className="flex flex-col gap-3 items-center">
      {cartItems.map((item) => (
        <div
          key={item.product._id}
          className="flex lg:flex-row flex-col justify-between items-center w-full max-w-lg bg-gray-100 p-4 rounded-xl shadow gap-6"
        >
          <div className="bg-white p-4 rounded shadow w-full">
            <div className="flex items-center justify-between gap-9">
              <p className="text-lg">{item.product.title}</p>
              <p className="text-lg">${item.product.price}</p>
            </div>
            <p className="text-gray-500">
              Quantity: {getProductQuantity(item.product._id)}
            </p>
          </div>
          {isCartMode && <CounterQuantity product={item.product} />}
        </div>
      ))}
      <h2 className="text-xl font-bold text-right mb-5">
        Total: ${totalPrice.toFixed(2)}
      </h2>
    </div>
  );
};

export default CartSummary;
