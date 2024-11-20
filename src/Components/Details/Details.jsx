import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartDataContext } from "../../CartContext";

const Details = () => {
  const { product_id } = useParams();

  const [showingCard, setShowingCard] = useState([]);

  const { cartData, setCartData } = useContext(CartDataContext);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setShowingCard(data.find((prod) => prod.id === product_id));
      })
      .catch((err) => console.error(err));
  }, [product_id]);

  const handleAddToCart = (prod) => {
    const checkAdded = cartData.find((elm) => prod === elm);

    return !checkAdded && setCartData([...cartData, prod]);
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
            <p className="font-medium text-sm rounded-full border border-green-400 text-green-600 inline-block py-2 px-4">
              {availability ? `In stock` : `Out of stock`}
            </p>
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
            <div className="space-x-2">
              <button
                className="btn bg-purple-600 text-white py-3 px-5 rounded-full"
                onClick={() => handleAddToCart(showingCard)}
              >
                Add to Cart *
              </button>
              <button className="btn">()</button>
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
