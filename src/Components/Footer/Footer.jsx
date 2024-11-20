const Footer = () => {
  return (
    <footer className="py-24 ">
      <section className=" max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="font-bold text-3xl">Gadget Heaven</h1>
          <p className="font-medium text-base">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="divider"></div>
        <div className="flex justify-around text-center">
          <div>
            <h4 className="font-bold text-lg">Services</h4>
            <ul className="font-normal text-base text-gray-500 space-y-2">
              <li className="hover:underline cursor-pointer">Product Support </li>
              <li className="hover:underline cursor-pointer">Order Tracking</li>
              <li className="hover:underline cursor-pointer">Shipping & Delivery</li>
              <li className="hover:underline cursor-pointer">Returns</li>
            </ul>
          </div>
          <div>
          <h4 className="font-bold text-lg">Company</h4>
          <ul className="font-normal text-base text-gray-500 space-y-2">
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
          <h4 className="font-bold text-lg">Legal</h4>
          <ul className="font-normal text-base text-gray-500 space-y-2">
              <li className="hover:underline cursor-pointer">Terms of Service </li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
              <li className="hover:underline cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
