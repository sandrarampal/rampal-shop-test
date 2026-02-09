import useProductsQuery from "../queries/useProductsQuery";
import type { TProduct } from "../types";
import CounterCart from "./CounterCart";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const { data, error, isLoading } = useProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (data)
    return (
      <div className="flex flex-wrap gap-5 w-100">
        {data.map((product: TProduct) => (
          <div key={product._id} className="border p-5 mb-5">
            <Link to={`/products/${product._id}`}>
              <img
                src={product.thumbnail}
                alt={`photo du produit ${product.title}`}
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.price} €</p>
              <CounterCart />
            </Link>
          </div>
        ))}
      </div>
    );
};

export default ProductsList;
