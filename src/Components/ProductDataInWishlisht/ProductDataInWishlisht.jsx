import { useContext } from "react";
import { CartDataContext } from "../../CartContext";
import { ImCancelCircle } from "react-icons/im";
import { IoCartOutline } from "react-icons/io5";
import toast from "react-hot-toast";

const ProductDataInWishlisht = ({ prod }) => {
  const { cartData, setCartData, wishlist, setWishlist } =
    useContext(CartDataContext);

  const handleRemoveProduct = (id) => {
    const data = wishlist.filter((product) => product.id !== id);

    setWishlist(data);
  };
  const handleAddToCart = (prod) => {
    const checkAdded = cartData.find((elm) => prod.id === elm.id);

    if (!checkAdded) {
      toast.success("Added to Cart");
      setCartData([...cartData, prod]);
      handleRemoveProduct();
      return;
    }
    toast.error("Already Added");
    handleRemoveProduct(prod.id);
  };
  return (
    <section className="flex justify-between border rounded-xl shadow-md p-8 bg-white">
      <div className="flex items-center gap-4">
        <figure className="bg-slate-200 rounded-xl p-2 w-52 flex items-center justify-center">
          <img
            className="h-32 bg-slate-200 rounded-xl"
            src={prod.image}
            alt={`image of ${prod.title}`}
          />
        </figure>
        <div className="space-y-2">
          <h3 className="font-semibold text-2xl">{prod.title}</h3>
          <h3 className="font-normal text-lg">{prod.description}</h3>
          <h3 className="font-semibold text-xl">Price: ${prod.price}</h3>
          <button
            className="btn bg-purple-600 hover:bg-purple-800 text-white py-3 px-5 rounded-full flex items-center gap-2"
            onClick={() => handleAddToCart(prod)}
          >
            Add to Cart <IoCartOutline />
          </button>
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

export default ProductDataInWishlisht;
