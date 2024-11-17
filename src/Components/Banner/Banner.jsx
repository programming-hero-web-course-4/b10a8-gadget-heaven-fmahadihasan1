import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import headerImage from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <section className=" border rounded-xl bg-white p-1">
        <Navbar />

        <section className="bg-purple-600 pt-10 pb-60 flex flex-col items-center space-y-6 text-white rounded-br-xl rounded-bl-xl">
          {/* Title and Description */}
          <h1 className="text-4xl font-bold max-w-3xl text-center">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-lg max-w-2xl text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          {/* Shop Now Button */}
          <Link to={"/dashboard"}>
            <button className="btn bg-white text-purple-600 hover:bg-gray-100">
              Shop Now
            </button>
          </Link>
        </section>
      </section>
      <div className="flex justify-center max-w-7xl -mt-52">
        <figure className="max-w-3xl border-[#FFFFFF]  border-2 rounded-2xl p-3">
          <img
            src={headerImage}
            alt="VR Headset"
            className=" rounded-xl h-full w-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
