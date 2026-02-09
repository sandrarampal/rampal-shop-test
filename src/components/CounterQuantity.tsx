import { useStore } from "../zustand/store";
import type { TProduct } from "../types";

interface CounterQuantityProps {
  product: TProduct;
}

const CounterQuantity = ({ product }: CounterQuantityProps) => {
  const {
    incrementQuantity,
    decrementQuantity,
    getProductQuantity,
    addToCart,
  } = useStore((store) => store);

  const quantity = getProductQuantity(product._id);

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
    <div className="flex gap-4 text-xl items-center">
      {quantity > 0 && (
        <button
          onClick={handleDecrement}
          className="cursor-pointer hover:text-green-500 transition-colors duration-300"
        >
          -
        </button>
      )}
      <span className="border border-gray-400 rounded-4xl w-7 h-7 flex items-center justify-center text-lg">
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
};

export default CounterQuantity;
