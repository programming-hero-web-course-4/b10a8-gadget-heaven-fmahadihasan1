import { useContext } from "react";
import { CartDataContext } from "../../CartContext";

const Dashboard = () => {
  const { cartData, setCartData } = useContext(CartDataContext);

  return (
    <>
      <h1 className="text-center">
        getting value from context is {cartData.length}
      </h1>
    </>
  );
};

export default Dashboard;
