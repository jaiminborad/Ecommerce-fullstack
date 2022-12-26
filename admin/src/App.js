import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import Layout from "./layout/Layout";

const App = () => {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin && (
          <>
            <Route element={<Layout />}>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Route>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
