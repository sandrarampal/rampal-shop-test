import type { TProduct } from "../types";

const ProductInfos = ({ data }: { data: TProduct }) => {
  return (
    <div className="p-2 md:p-4 flex flex-col justify-center">
      <div className="space-y-4 md:space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 pb-3 md:pb-4">
            {data.title}
          </h1>
          <p className="border border-purple-900 w-fit rounded-lg px-3 py-1 mt-2 text-sm font-medium text-purple-900">
            {data.category}
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-200">
          <p className="text-base md:text-lg text-gray-600 pt-4 md:pt-6 leading-relaxed">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row text-gray-500 gap-2 sm:gap-3 text-sm md:text-base">
            <p className="font-medium">Dimensions (w x h x d):</p>
            <p>
              {data.dimensions.width} x {data.dimensions.height} x{" "}
              {data.dimensions.depth}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-sm md:text-base">
            <p className="font-medium">Ratings:</p>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <p>{data.rating}/5</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 md:pt-6">
          <div className="flex items-center justify-start mb-4 md:mb-8">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-900">
              {data.price} €
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfos;
