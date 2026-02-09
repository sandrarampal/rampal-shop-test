import useProductQuery from "../queries/useProductQuery";
import CounterCart from "../components/CounterCart";
import { useParams } from "react-router-dom";

const OneProduct = () => {
  const { id } = useParams();

  if (!id) return <div>Product not found</div>;

  const { data, error, isLoading } = useProductQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (data)
    return (
      <div>
        <img src={data.thumbnail} alt={`photo du produit ${data.title}`} />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>{data.price} €</p>
        <CounterCart />
      </div>
    );
};

export default OneProduct;
