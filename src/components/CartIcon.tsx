import { useStore } from "../zustand/store";

const CartIcon = () => {
  const cartCounter = useStore((store) => store.cartCounter);

  return (
    <div>
      <p>{cartCounter}</p>
    </div>
  );
};

export default CartIcon;
