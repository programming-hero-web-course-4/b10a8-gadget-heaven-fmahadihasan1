import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    id,
    image,
    title,
    category,
    price,
    brand,
  } = product;
  return (
    <>
      <section className="min-h-28 p-5 rounded-xl border">
        <figure className="flex justify-center items-center p-2 h-64 bg-slate-100 rounded-xl">
          <img
            className=" bg-slate-200 shadow-md rounded-md h-full"
            src={image}
            alt={`Image of ${title}`}
          />
        </figure>
        <div className="flex flex-col">
          <div className="flex-grow space-y-3 my-3">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="space-x-2">
              <span className="badge border-green-100 bg-slate-200 font-medium">
                {brand}
              </span>
              <span className="badge border-green-100 bg-slate-200 font-medium">
                {category}
              </span>
            </p>
            <h4 className="">Price: ${price}</h4>
          </div>
          <div>
            <Link to={`/details/${id}`}>
              <button className="btn btn-outline">View Details</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
