import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Categories from "../Categories/Categories";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showingProducts, setShowingProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setShowingProducts(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const dataAccordingToCategory = (categoryName) => {
    if (categoryName === "All") {
      return setShowingProducts(products);
    } else if (categoryName === "computers") {
      const sorted = [...products].filter(
        (prod) => prod.category === "Computers"
      );
      return setShowingProducts(sorted);
    } else if (categoryName === "phones") {
      const sorted = [...products].filter((prod) => prod.category === "Phones");
      return setShowingProducts(sorted);
    } else if (categoryName === "smart_wathces") {
      const sorted = [...products].filter(
        (prod) => prod.category === "Smart Watches"
      );
      return setShowingProducts(sorted);
    } else if (categoryName === "chargers") {
      const sorted = [...products].filter(
        (prod) => prod.category === "Chargers"
      );
      return setShowingProducts(sorted);
    } else if (categoryName === "power_banks") {
      const sorted = [...products].filter(
        (prod) => prod.category === "Power Banks"
      );
      return setShowingProducts(sorted);
    } else {
      const sorted = [...products].filter(
        (prod) =>
          prod.category !== "Computers" &&
          prod.category !== "Phones" &&
          prod.category !== "Smart Watches" &&
          prod.category !== "Chargers" &&
          prod.category !== "Power Banks"
      );
      return setShowingProducts(sorted);
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-center text-3xl font-bold my-14">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-4 ">
        <div className=" p-4">
          <Categories
            dataAccordingToCategory={dataAccordingToCategory}
          ></Categories>
        </div>
        <div role="tabpanel" className="col-span-3 grid grid-cols-3 gap-3">
          {showingProducts.map((elm) => (
            <Product product={elm} key={elm.id}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
