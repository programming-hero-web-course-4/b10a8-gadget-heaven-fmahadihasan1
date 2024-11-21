import { useContext, useEffect, useState } from "react";
import { CartDataContext } from "../CartContext";
import { LuFilter } from "react-icons/lu";
import ProductDataInCart from "../Components/ProductDataInCart/ProductDataInCart";
import ProductDataInWishlisht from "../Components/ProductDataInWishlisht/ProductDataInWishlisht";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { cartData, setCartData, wishlist } = useContext(CartDataContext);

  const [sorted, setSorted] = useState([]);
  const [isCartBtnCliked, setIsCartBtnClicked] = useState(true);
  const [isSorted, setIsSorted] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cartData.reduce(
      (acc, product) => acc + (parseFloat(product.price) || 0),
      0
    );
    setTotal(totalPrice);
    setSorted(cartData);
  }, [cartData]);

  const handleSortByPrice = () => {
    const sortedArray = [...cartData].sort((a, b) => b.price - a.price);
    setSorted(sortedArray);
    setIsSorted(true);
  };

  const handlePurchaseBtn = () => {
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <>
      <section className="bg-slate-100 pb-24">
        <header className="bg-purple-600 text-white">
          <div className="max-w-3xl mx-auto text-center py-16 space-y-5">
            <h1 className="font-bold text-3xl">Dashboard</h1>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-3 justify-center items-center">
              <button
                onClick={() => setIsCartBtnClicked(true)}
                className={`btn border rounded-full px-8 py-3 ${
                  !isCartBtnCliked
                    ? "bg-purple-500 text-white font-bold"
                    : "bg-white text-purple-500"
                }`}
              >
                Cart
              </button>
              <button
                onClick={() => setIsCartBtnClicked(false)}
                className={`btn border rounded-full px-8 py-3 ${
                  isCartBtnCliked
                    ? "bg-purple-500 text-white font-bold"
                    : "bg-white text-purple-500"
                }`}
              >
                Wishlist
              </button>
            </div>
          </div>
        </header>

        <section className="flex justify-between items-center max-w-7xl mx-auto my-6">
          <div>
            <h3 className="font-bold text-2xl">
              {isCartBtnCliked ? "Cart" : "Wishlist"}
            </h3>
          </div>
          {isCartBtnCliked && cartData.length > 0 && (
            <div className="flex items-center gap-5">
              <h3 className="font-bold text-2xl">
                Total Cost: $ {total.toFixed(2)}
              </h3>
              <button
                onClick={handleSortByPrice}
                className="btn border rounded-full px-8 py-3 bg-white text-purple-500 font-bold flex items-center gap-1"
              >
                {isSorted ? "Sorted by price" : "Sort by price"} <LuFilter />
              </button>
              <button
                onClick={handlePurchaseBtn}
                className="btn border rounded-full px-8 py-3 bg-purple-500 text-white"
              >
                Purchase
              </button>
            </div>
          )}
        </section>

        <section
          className={`max-w-7xl mx-auto space-y-6 ${
            !isCartBtnCliked && "hidden"
          }`}
        >
          {sorted.length > 0 ? (
            sorted.map((prod, idx) => (
              <ProductDataInCart key={idx} prod={prod}></ProductDataInCart>
            ))
          ) : (
            <p className="text-center text-gray-500">
              Your cart is empty.{" "}
              <Link to="/" className="text-purple-500">
                Start shopping now!
              </Link>
            </p>
          )}
        </section>

        <section
          className={`max-w-7xl mx-auto space-y-6 ${
            isCartBtnCliked && "hidden"
          }`}
        >
          {wishlist.length > 0 ? (
            wishlist.map((prod, idx) => (
              <ProductDataInWishlisht
                key={idx}
                prod={prod}
              ></ProductDataInWishlisht>
            ))
          ) : (
            <p className="text-center text-gray-500">
              Your wishlist is empty.{" "}
              <Link to="/" className="text-purple-500">
                Browse products!
              </Link>
            </p>
          )}
        </section>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">
              Purchase Successful!
            </h3>
            <p className="text-center py-4 text-gray-600">
              Thank you for shopping with us!
            </p>
            <p className="text-center py-4 text-gray-800 font-bold">
              Total: ${total.toFixed(2)}
            </p>
            <form
              method="dialog"
              className="modal-action"
              onSubmit={() => setCartData([])}
            >
              <button className="btn bg-purple-500 text-white w-full">
                Close
              </button>
            </form>
          </div>
        </dialog>
      </section>
    </>
  );
};

export default Dashboard;
