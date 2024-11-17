import { BsCartDash } from "react-icons/bs";
import { IoHeartCircleOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CartDataContext } from "../../CartContext";
import { useContext } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const { cartData } = useContext(CartDataContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar ${
        pathname === "/" ? "bg-purple-600 text-white" : "bg-base-100"
      } rounded-tl-xl rounded-tr-xl`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end text-3xl gap-3 font-bold">
        <Link to={"/dashboard"} className="indicator">
          <span className="indicator-item badge-sm text-purple-500 bg-slate-200 rounded-full">
            {" "}
            {cartData.length > 0 && cartData.length}{" "}
          </span>
          <BsCartDash />
        </Link>
        <Link to={"/wishlist"}>
          <IoHeartCircleOutline />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
