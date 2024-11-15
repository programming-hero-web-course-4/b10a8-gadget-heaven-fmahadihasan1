import { useLocation } from "react-router-dom";
import Products from "../Components/Products/Products";
import Banner from "./../Components/Banner/Banner";

const Home = () => {
  const {pathname} = useLocation();
  return (
    <section>
      <Banner></Banner>
      <Products></Products>
    </section>
  );
};

export default Home;
