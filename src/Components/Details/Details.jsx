import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartDataContext } from "../../CartContext";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import toast from "react-hot-toast";

const Details = () => {
  const { product_id } = useParams();

  const [showingCard, setShowingCard] = useState([]);

  const { cartData, setCartData, wishlist, setWishlist } =
    useContext(CartDataContext);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setShowingCard(data.find((prod) => prod.id === product_id));
      })
      .catch((err) => console.error(err));
  }, [product_id]);

  const checkExisting = wishlist.find((elm) => showingCard.id === elm.id);

  const handleAddToCart = (prod) => {
    const checkAdded = cartData.find((elm) => prod.id === elm.id);

    if (!checkAdded) {
      toast.success("Added to Cart");
      setCartData([...cartData, prod]);
      return;
    }

    toast.error("Already Added");
  };
  const handleAddToWishlist = (prod) => {
    const checkAdded = wishlist.find((elm) => prod.id === elm.id);

    if (!checkAdded) {
      toast.success("Added to Wishlist");
      setWishlist([...wishlist, prod]);
      return;
    }

    toast.error("Already Added");
  };

  const {
    id,
    image,
    title,
    category,
    price,
    description,
    specifications,
    availability,
    rating,
    brand,
    warranty,
    release_date,
    stock_quantity,
  } = showingCard || {};

  return (
    <section>
      <div className="bg-purple-500 min-h-96 text-white py-16">
        <h1 className="text-center text-3xl font-bold">Product Details</h1>
        <p className="max-w-4xl mx-auto text-center text-base font-normal">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      {showingCard ? (
        <section className="flex gap-20 max-w-7xl mx-auto items-center bg-slate-50 rounded-2xl p-4 border-2 -mt-52 ">
          <figure className="bg-slate-300 flex justify-center items-center p-2 rounded-2xl">
            <img
              className="h-[500px] w-[425px] rounded-xl bg-slate-300"
              src={
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSXcM4Ff9soidsMNC_HnH-yPJTMpJeo4sWIizFFgU5MDRj5nDwnyUC4GDk4FoCdXNIzzyOz9HOIStuk0165WGku3be_srnvVI889kgW2_RpO2MQDuYD_u3m-Q&usqp=CAE"
              }
              alt={`image of ${title}`}
            />
          </figure>
          <div className="space-y-3">
            <h2 className="font-semibold text-3xl">{title}</h2>
            <p className="font-semibold text-xl">Price: $ {price}</p>
            <div className="font-medium text-sm flex gap-3">
              {availability ? (
                <p className="border border-green-400 text-green-600 py-2 px-4 rounded-full">
                  {stock_quantity} In stock
                </p>
              ) : (
                <p className="border border-red-400 text-red-600 py-2 px-4 rounded-full">
                  Out of stock
                </p>
              )}
              <p className="border border-green-400 text-green-600 py-2 px-4 rounded-full">
                {category}
              </p>
              <p className="border border-green-400 text-green-600 py-2 px-4 rounded-full">
                {brand}
              </p>
            </div>
            <p className="font-normal text-lg text-gray-500">{description}</p>
            {specifications && (
              <>
                <h3 className="font-bold text-lg">Specifications:</h3>
                <ul className="list-decimal list-inside font-normal text-lg text-gray-500">
                  {specifications.map((elm, idx) => (
                    <li key={idx}> {elm} </li>
                  ))}
                </ul>
              </>
            )}
            <p className="text-lg font-bold">Ratings : {rating} *</p>
            <p className="text-lg font-bold">Warranty : {warranty}</p>
            <p className="text-lg font-bold">Released Date : {release_date}</p>
            <div className="space-x-2 flex items-center">
              <button
                className="btn bg-purple-600 hover:bg-purple-800 text-white py-3 px-5 rounded-full flex items-center gap-2"
                onClick={() => handleAddToCart(showingCard)}
              >
                Add to Cart <IoCartOutline />
              </button>
              <button
                disabled={checkExisting}
                onClick={() => handleAddToWishlist(showingCard)}
                className="btn rounded-full font-bold text-black border-gray-300 text-2xl"
              >
                <CiHeart />
              </button>
            </div>
          </div>
        </section>
      ) : (
        <p className="text-center text-red-500">Product not found.</p>
      )}
    </section>
  );
};

export default Details;
