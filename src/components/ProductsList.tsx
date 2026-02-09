import { useEffect } from "react";
import { useStore } from "../zustand/store";
import CounterCart from "./CounterCart";

const ProductsList = () => {
  const { products, fetch_products, isLoading, error } = useStore(
    (store) => store,
  );

  useEffect(() => {
    fetch_products();
  }, [fetch_products]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  console.log("products", products);

  return (
    <div className="flex flex-wrap gap-5 w-100">
      {products.map((product) => (
        <div key={product.id} className="border p-5 mb-5">
          <img
            src={product.thumbnail}
            alt={`photo du produit ${product.title}`}
          />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price} €</p>
          <CounterCart />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
