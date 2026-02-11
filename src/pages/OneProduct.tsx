import useProductQuery from "../queries/useProductQuery";
import CounterQuantity from "../components/CounterQuantity";
import { Link, useParams } from "react-router-dom";
import ProductInfos from "../components/ProductInfos";
import Loader from "../components/Loader";

const OneProduct = () => {
  const { id } = useParams();

  if (!id) return <div>Product not found</div>;

  const { data, error, isLoading } = useProductQuery(id);

  if (isLoading) return <Loader />;
  if (error) return <div>{error.message}</div>;
  if (data)
    return (
      <div className="min-h-screen bg-gray-50 px-4 md:px-8 lg:px-12">
        <Link to="/products" className="ml-4 mt-6 mb-4 inline-block">
          <p className="text-purple-900 hover:text-purple-700 transition-colors">
            ← Back to products
          </p>
        </Link>
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
            <div className="w-full lg:w-1/2 max-w-md lg:max-w-lg">
              <div className="border border-gray-200 rounded-2xl flex flex-col overflow-hidden">
                <div className="aspect-square">
                  <img
                    src={data.thumbnail}
                    alt={`photo du produit ${data.title}`}
                    className="object-cover rounded-t-2xl w-full h-full"
                  />
                </div>
                <div className="border-t border-gray-200 flex items-center overflow-x-auto">
                  {data.images
                    .filter((image) => image && image.trim() !== "")
                    .map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`photo du produit ${data.title} - ${index + 1}`}
                        className="object-cover w-16 h-16 md:w-20 md:h-20 border-r border-gray-200 shrink-0 bg-gray-100"
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <ProductInfos data={data} />
              <div className="flex justify-center lg:justify-start">
                <CounterQuantity product={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OneProduct;
