import { Route, Routes } from "react-router-dom";
import Api from "./Components/Api";
import Card from "./Components/Card";
import Cart from "./Components/Cart";

function App() {
  // return <Card id={1} name={"watch"} price={12000} />;
  return (
    <>
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
