import { useContext, useEffect, useState } from "react";
import { CartDataContext } from "../CartContext";
import { LuFilter } from "react-icons/lu";
import ProductDataInCart from "../Components/ProductDataInCart/ProductDataInCart";
import ProductDataInWishlisht from "../Components/ProductDataInWishlisht/ProductDataInWishlisht";

const Dashboard = () => {
  const { cartData, wishlist } = useContext(CartDataContext);

  const [isCartBtnCliked, setIsCartBtnClicked] = useState(true);
  const [total, setTotal] = useState(0);

  const handleTotal = () => {
    const totalPrice = cartData.reduce((accumulator, product) => {
      return accumulator + parseFloat(product.price);
    }, 0);
    setTotal(totalPrice);
  };
  useEffect(() => {
    handleTotal();
  }, [cartData]);

  return (
    <>
      <section className="bg-slate-100 pb-24">
        <section className="bg-purple-600 text-white">
          <div className="max-w-3xl mx-auto text-center py-16 space-y-5">
            <h1 className="text-center font-bold text-3xl">Dashboard</h1>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-3 justify-center items-center">
              <button
                onClick={() => setIsCartBtnClicked(true)}
                className={`"btn border rounded-full px-8 py-3 ${
                  isCartBtnCliked && "bg-white text-purple-500 font-bold"
                } `}
              >
                Cart
              </button>
              <button
                onClick={() => setIsCartBtnClicked(false)}
                className={`"btn border rounded-full px-8 py-3 ${
                  !isCartBtnCliked && "bg-white text-purple-500 font-bold"
                } `}
              >
                Wishlist
              </button>
            </div>
          </div>
        </section>
        <section className="flex justify-between items-center max-w-7xl mx-auto my-6">
          <div>
            <h3 className="font-bold text-2xl">
              {isCartBtnCliked ? "Cart" : "Wishlist"}
            </h3>
          </div>
          {isCartBtnCliked && (
            <div className="flex items-center gap-5">
              <h3 className="font-bold text-2xl">
                Total Coast: $ {total.toFixed(2)}
              </h3>
              <button
                className={`"btn border rounded-full px-8 py-3 bg-white text-purple-500 font-bold border-purple-500 flex items-center gap-1
                 `}
              >
                Sort by price <LuFilter />
              </button>
              <button
                className={`"btn border rounded-full px-8 py-3 
                   bg-purple-500  text-white border-purple-500
                 `}
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
          {cartData.length > 0 &&
            cartData.map((prod, idx) => (
              <ProductDataInCart key={idx} prod={prod}></ProductDataInCart>
            ))}
        </section>
        <section
          className={`max-w-7xl mx-auto space-y-6 ${
            isCartBtnCliked && "hidden"
          }`}
        >
          {wishlist.length > 0 &&
            wishlist.map((prod, idx) => (
              <ProductDataInWishlisht
                key={idx}
                prod={prod}
              ></ProductDataInWishlisht>
            ))}
        </section>
      </section>
    </>
  );
};

export default Dashboard;
