import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-4xl font-bold flex-col space-y-5">
      <h1 className="text center">404 !!!</h1>
      <h1>Jis Raha pe tum chal rahe ho, Ekdin buri tara se fasoge.</h1>

      <figure className="flex justify-center items-center">
        <img
          src="https://i.pinimg.com/736x/38/16/94/381694bd28f602878e9f272d6b83f3bf.jpg"
          alt=""
        />
      </figure>

      <Link to={"/"} className="btn btn-secondary">
        Chalo Wapas
      </Link>
    </div>
  );
};

export default ErrorPage;
