import { createContext, useState } from "react";

export const CartDataContext = createContext();

const CartContext = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <CartDataContext.Provider
      value={{ cartData, setCartData, wishlist, setWishlist }}
    >
      {children}
    </CartDataContext.Provider>
  );
};

export default CartContext;
