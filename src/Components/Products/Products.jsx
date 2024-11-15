import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Categories from "../Categories/Categories";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err.message));
  }, []);

  const dataAccordingToCategory = (categoryName) => {
    const sorted = "";
  };

  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-center text-3xl font-bold">
        Total Products {products.length}
      </h1>
      <div className="grid grid-cols-4 ">
        <div className=" p-4">
          <Categories></Categories>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-3">
          {products.map((elm) => (
            <Product product={elm} key={elm.id}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
