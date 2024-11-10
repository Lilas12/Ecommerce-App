import "./App.scss";
import Navbar from "components/navbar/navbar";
import Store from "pages/store";
import Cart from "pages/cart";
import Authenticate from "pages/authenticate";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Store />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/authenticate" element={<Authenticate />}></Route>
      </Routes>
    </>
  );
}

export default App;
