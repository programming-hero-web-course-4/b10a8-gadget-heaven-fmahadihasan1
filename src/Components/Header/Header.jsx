import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <section className="max-w-7xl mx-auto">
      {pathname !== "/" && <Navbar></Navbar>}
    </section>
  );
};

export default Header;
