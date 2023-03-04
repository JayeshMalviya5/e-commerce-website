import React from "react";
import Login from "./Components/login/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import { PATHS } from "./Paths";
import ProductHome from "./Components/ProductHomePage/ProductHome";
import PrivateRoute from "./Routes/PrivateRoute";
import Details from "./Components/ProductDetails/Details";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/product" element = {<ProductHome />}/>
            <Route path="/product/:productId" element = {<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
