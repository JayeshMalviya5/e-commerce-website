import React from "react";
import Login from "./Components/login/Login";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ProductHome from "./Components/ProductHomePage/ProductHome";
import PrivateRoute from "./Routes/PrivateRoute";
import RestrictedRoutes from "./Routes/RestrictedRoute";
import Details from "./Components/ProductDetails/Details";
import Cart from "./Components/cart/Cart";
import Signup from "./Components/Signup/Signup";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RestrictedRoutes />}>
          <Route path="/e-commerce-website/login" element={<Login />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/e-commerce-website/login" element={<Login />} />
        <Route exact path="/e-commerce-website" element={<PrivateRoute />}>
          <Route path="/e-commerce-website/product" element={<ProductHome />} />
          <Route
            path="/e-commerce-website/product/:productId"
            element={<Details />}
          />
          <Route path="/e-commerce-website/product/cart" element={<Cart />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to={"/e-commerce-website/login"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
