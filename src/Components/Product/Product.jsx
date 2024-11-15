import { Link } from "react-router-dom";

const Product = ({ product }) => {
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
  } = product;
  return (
    <>
      <section className="min-h-28 p-5 rounded-xl border">
        <figure className="flex justify-center items-center p-2">
          <img
            className=" bg-slate-200 shadow-md rounded-md"
            src={`https://cdn11.bigcommerce.com/s-g9br3/images/stencil/2048x2048/products/2813/5325/HYDROC_16_-_Front_1000x1000__73366.1720238288.jpg?c=2`}
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
          <button className="btn btn-outline">
            <Link to={`/details/${id}`}>View Details</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Product;
