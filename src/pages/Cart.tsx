import ButtonLink from "../components/buttons/ButtonLink";
import { useStore } from "../zustand/store";

const Cart = () => {
  const cartItems = useStore((store) => store.cartItems);
  const totalPrice = useStore((store) => store.totalPrice);
  const getProductQuantity = useStore((store) => store.getProductQuantity);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-5">
          {cartItems.map((item) => (
            <div key={item.product._id} className="flex items-center gap-5">
              <div>
                <p>{item.product.title}</p>
                <p>${item.product.price}</p>
                <p>Quantity: {getProductQuantity(item.product._id)}</p>
              </div>
            </div>
          ))}
          <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
      <ButtonLink content="Go to checkout" path="/payment" />
    </div>
  );
};

export default Cart;
