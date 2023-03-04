import React from "react";
import "./Navbar.css";
import Btn from "../UI/button/Btn";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/login");
    window.localStorage.clear();
  };

  const toHome = () => {
    navigate("/product");
    // window.localStorage.clear();
  };
  return (
    <>
      <div className="navbar">
        <div className="heading">E-Commerce Website</div>
        <div className="button">
          <Btn lable="Home" onClick={toHome} />
          <Btn lable="Cart(0)" />
          <Btn lable="Logout" onClick={logout} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
