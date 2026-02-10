import useProductQuery from "../queries/useProductQuery";
import CounterQuantity from "../components/CounterQuantity";
import { useParams } from "react-router-dom";

const OneProduct = () => {
  const { id } = useParams();

  if (!id) return <div>Product not found</div>;

  const { data, error, isLoading } = useProductQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (data)
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="aspect-square lg:aspect-auto">
                <img
                  src={data.thumbnail}
                  alt={`photo du produit ${data.title}`}
                  className="w-full h-full object-cover  "
                />
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      {data.title}
                    </h1>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {data.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-4xl font-bold text-purple-600">
                        {data.price} €
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Quantité
                      </h3>
                      <CounterQuantity product={data} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OneProduct;
