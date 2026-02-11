import ProductsList from "../components/ProductsList";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";

const Products = () => {
  return (
    <div className="flex flex-col items-center">
      <Title content="Browse our products" />
      <SearchBar />
      <ProductsList />
    </div>
  );
};

export default Products;
