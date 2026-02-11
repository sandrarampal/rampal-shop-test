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
    <div className="flex gap-3 md:gap-2 text-lg md:text-xl items-center border border-gray-200 rounded-full p-1 bg-white shadow-sm">
      <button
        onClick={handleDecrement}
        className={`cursor-pointer hover:text-green-500 transition-colors duration-300 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 ${quantity === 0 ? "text-gray-200 cursor-not-allowed" : ""}`}
      >
        -
      </button>

      <span className="bg-gray-100 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-sm md:text-lg font-medium min-w-8 md:min-w-10">
        {quantity}
      </span>
      <button
        onClick={handleIncrement}
        className="cursor-pointer hover:text-green-500 transition-colors duration-300 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
});

export default CounterQuantity;
