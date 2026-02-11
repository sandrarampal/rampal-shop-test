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
    <div className="flex flex-col gap-3">
      {cartItems.map((item) => (
        <div key={item.product._id} className=" bg-white p-4 rounded shadow">
          <div className="flex items-center justify-between gap-9">
            <p className="text-lg">{item.product.title}</p>
            <p className="text-lg">${item.product.price}</p>
          </div>
          <p className="text-gray-500">
            Quantity: {getProductQuantity(item.product._id)}
          </p>
        </div>
      ))}
      <h2 className="text-xl font-bold text-right mb-5">
        Total: ${totalPrice.toFixed(2)}
      </h2>
    </div>
  );
};

export default CartSummary;
