import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center mt-40 flex-col items-center gap-5">
      <p>Welcome to my store</p>
      <Link
        to="/products"
        className="px-5 py-2 bg-amber-600 text-white rounded"
      >
        <p>Access to our offers</p>
      </Link>
    </div>
  );
};

export default Home;
