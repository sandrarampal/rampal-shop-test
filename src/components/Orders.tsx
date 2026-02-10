import useOrdersQuery from "../queries/useOrdersQuery";
import useAuthContext from "../context/hooks/useAuthContext";
import OneOrder from "./OneOrder";

const Orders = () => {
  const { token } = useAuthContext();
  const { data, isLoading, error } = useOrdersQuery(token);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (data)
    return (
      <div>
        {data.map((order) => (
          <OneOrder key={order._id} order={order} />
        ))}
      </div>
    );
};

export default Orders;
