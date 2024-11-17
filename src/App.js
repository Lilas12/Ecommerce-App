import "./App.scss";
import Navbar from "components/navbar/navbar";
import Store from "pages/store";
import Cart from "pages/cart";
import Authenticate from "pages/authenticate";
import { Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "utils/firebaseConfig";
import { MainContext } from "utils/context";
import { useEffect } from "react";
import { fetchUserData } from "utils/firebaseFunctions";
function App() {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    user && fetchUser();
  }, [user]);

  const fetchUser = async () => {
    const res = await fetchUserData(user);
    if (res.success) {
      console.log(res.data);
    }
  };

  return (
    <>
      <MainContext.Provider value={{ user, loading }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/authenticate" element={<Authenticate />}></Route>
        </Routes>
      </MainContext.Provider>
    </>
  );
}

export default App;
