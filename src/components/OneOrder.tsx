import type { TOrder } from "../types";
import useChangeDeliveryMutation from "../mutations/useChangeDeliveryMutation";

const OneOrder = ({ order }: { order: TOrder }) => {
  const changeDeliveryMutation = useChangeDeliveryMutation(order._id);

  const handleDeliveryChange = (checked: boolean) => {
    changeDeliveryMutation.mutate(checked);
  };

  return (
    <div key={order._id} className="bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="text-lg font-semibold mb-2">Order ID: {order._id}</h3>
      <p className="text-gray-600 mb-1">User: {order.owner.email}</p>
      <p className="text-gray-600 mb-1">Total: {order.price.toFixed(2)} €</p>
      <div className="flex items-center gap-4">
        <p className="text-gray-600">Delivered:</p>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={(e) => handleDeliveryChange(e.target.checked)}
            checked={order.delivered}
          />
        </div>
      </div>
    </div>
  );
};

export default OneOrder;
