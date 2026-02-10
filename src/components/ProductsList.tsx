import useProductsQuery from "../queries/useProductsQuery";
import type { TProduct } from "../types";
import CounterQuantity from "./CounterQuantity";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const { data, error, isLoading } = useProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (data)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-7">
        {data.map((product: TProduct) => (
          <div
            key={product._id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <Link to={`/products/${product._id}`} className="block">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={`photo du produit ${product.title}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>

                <p className="text-xl font-bold text-purple-900 mb-3">
                  {product.price} €
                </p>
              </div>
            </Link>
            <div className="p-4 pt-0 flex justify-center">
              <CounterQuantity product={product} />
            </div>
          </div>
        ))}
      </div>
    );
};

export default ProductsList;
