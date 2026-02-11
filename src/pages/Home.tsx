import Title from "../components/Title";
import ButtonLink from "../components/buttons/ButtonLink";

const Home = () => {
  return (
    <div className="flex justify-center mt-40 flex-col items-center">
      <Title content="Welcome to E-store!" />
      <div className="mb-10 flex flex-col gap-2">
        <p>Find everything you need in on click.</p>
        <p>Login to order your dream product</p>
      </div>
      <ButtonLink content="Access to our offers" path="/products" />
    </div>
  );
};

export default Home;
