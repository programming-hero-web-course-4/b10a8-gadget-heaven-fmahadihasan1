import { useContext } from "react";
import { ImCancelCircle } from "react-icons/im";
import { CartDataContext } from "../../CartContext";

const ProductDataInCart = ({ prod }) => {
  const { cartData, setCartData } = useContext(CartDataContext);

  const handleRemoveProduct = (id) => {
    const data = cartData.filter((product) => product.id !== id);
    console.log(data);
    setCartData(data);
  };

  return (
    <section className="flex justify-between items-center border rounded-xl shadow-md p-8 bg-white">
      <div className="flex items-center gap-4">
        <figure>
          <div className="w-32 h-full rounded-xl bg-slate-400">0</div>
        </figure>
        <div className="space-y-2">
          <h3 className="font-semibold text-2xl">{prod.title}</h3>
          <h3 className="font-normal text-lg">{prod.description}</h3>
          <h3 className="font-semibold text-xl">Price: ${prod.price}</h3>
        </div>
      </div>
      <div
        onClick={() => handleRemoveProduct(prod.id)}
        className="text-red-600 text-3xl cursor-pointer hover:text-red-800"
      >
        <ImCancelCircle />
      </div>
    </section>
  );
};

export default ProductDataInCart;
