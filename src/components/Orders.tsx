import useOrdersQuery from "../queries/useOrdersQuery";
import useAuthContext from "../context/hooks/useAuthContext";

const Orders = () => {
  const { token } = useAuthContext();
  const { data, isLoading, error } = useOrdersQuery(token);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (data)
    return (
      <div>
        {data.map((order) => (
          <div key={order._id} className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="text-lg font-semibold mb-2">
              Order ID: {order._id}
            </h3>
            <p className="text-gray-600 mb-1">User: {order.owner.email}</p>
            <p className="text-gray-600 mb-1">
              Total: {order.price.toFixed(2)} €
            </p>
            <p className="text-gray-600 mb-1">Delivered:</p>
            <input type="checkbox" />
          </div>
        ))}
      </div>
    );
};

export default Orders;
