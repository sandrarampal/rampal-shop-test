import ProductsList from "../components/ProductsList";
import SearchBar from "../components/SearchBar";

const Products = () => {
  return (
    <div>
      <h2>Browse our products</h2>
      <SearchBar />
      <ProductsList />
    </div>
  );
};

export default Products;
