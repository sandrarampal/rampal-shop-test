import { memo } from "react";

interface OrderStatusProps {
  error: string;
  successMessage: string;
}

const OrderStatus = memo(({ error, successMessage }: OrderStatusProps) => (
  <div className="mt-4">
    {error && <p className="text-red-600 text-sm">{error}</p>}
    {successMessage && (
      <p className="text-green-600 text-sm">{successMessage}</p>
    )}
  </div>
));

OrderStatus.displayName = "OrderStatus";

export default OrderStatus;
