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
    <div>
      {quantity > 0 && <button onClick={handleDecrement}>-</button>}
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default CounterQuantity;
