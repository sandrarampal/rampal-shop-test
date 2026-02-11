import { useStore } from "../zustand/store";
import type { TProduct } from "../types";
import { memo } from "react";

interface CounterQuantityProps {
  product: TProduct;
}

const CounterQuantity = memo(({ product }: CounterQuantityProps) => {
  const quantity = useStore((store) => store.getProductQuantity(product._id));
  const incrementQuantity = useStore((store) => store.incrementQuantity);
  const decrementQuantity = useStore((store) => store.decrementQuantity);
  const addToCart = useStore((store) => store.addToCart);

  const handleIncrement = () => {
    if (quantity === 0) {
      addToCart(product);
    } else {
      incrementQuantity(product._id);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      decrementQuantity(product._id);
    }
  };

  return (
    <div className="flex gap-4 text-xl items-centerborder">
      <button
        onClick={handleDecrement}
        className={`cursor-pointer hover:text-green-500 transition-colors duration-300 ${quantity === 0 ? "text-gray-200 cursor-not-allowed" : ""}`}
      >
        -
      </button>

      <span className=" bg-gray-300 rounded-4xl w-7 h-7 flex items-center justify-center text-lg">
        {quantity}
      </span>
      <button
        onClick={handleIncrement}
        className="cursor-pointer hover:text-green-500 transition-colors duration-300"
      >
        +
      </button>
    </div>
  );
});

export default CounterQuantity;
