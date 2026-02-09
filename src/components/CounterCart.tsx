import { useStore } from "../zustand/store";

const CounterCart = () => {
  const { increment, decrement, cartCounter } = useStore((store) => store);

  const handleDecrement = () => {
    if (cartCounter > 0) {
      decrement();
    }
  };
  return (
    <div>
      {cartCounter > 0 && <button onClick={handleDecrement}>-</button>}
      <span>{cartCounter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CounterCart;
