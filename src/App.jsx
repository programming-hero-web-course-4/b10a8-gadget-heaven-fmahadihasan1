import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
