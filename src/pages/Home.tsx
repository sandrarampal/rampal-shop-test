import ButtonLink from "../components/buttons/ButtonLink";

const Home = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-12 space-y-8 ">
      <div className="space-y-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Welcome to
          </span>
          <br />
          <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            E-store
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
          The best offers, the best prices, all in one place.
        </p>
      </div>

      <div className="space-y-6">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <ButtonLink content="Discover our offers" path="/products" />
        </div>

        <p className="text-sm text-gray-500">
          Anything you need • Free delivery • Support 24/7
        </p>
      </div>
    </div>
  );
};

export default Home;
