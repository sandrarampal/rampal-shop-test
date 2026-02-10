import ProductsList from "../components/ProductsList";
import SearchBar from "../components/SearchBar";

const Products = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl my-5">Browse our products</h2>
      <SearchBar />
      <ProductsList />
    </div>
  );
};

export default Products;
