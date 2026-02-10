import type { TProduct } from "../types";

interface CartSummaryProps {
  cartItems: {
    product: TProduct;
  }[];
  totalPrice: number;
  getProductQuantity: (productId: string) => number;
}

const CartSummary = ({
  cartItems,
  totalPrice,
  getProductQuantity,
}: CartSummaryProps) => {
  return (
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
  );
};

export default CartSummary;
