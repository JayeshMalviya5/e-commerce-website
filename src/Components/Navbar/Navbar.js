import React, {useState} from "react";
import "./Navbar.css";
import Btn from "../UI/button/Btn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const store = useSelector((state) => state.itemsToRenderInCart);
  // const [count, setCount] = useState(store.length);
  // useEffect(()=>{
  //  setCount(store.length)
  // },[count])
  const navigate = useNavigate();
  const logout = () => {
    navigate("/e-commerce-website/login");
    window.localStorage.clear();
  };
  const toCart = () => {
    navigate("/e-commerce-website/product/cart");
    // window.localStorage.clear();
  };

  const toHome = () => {
    navigate("/e-commerce-website/product");
    // window.localStorage.clear();
  };
  return (
    <>
      <div className="navbar">
        <div className="heading">E-Commerce Website</div>
        <div className="button">
          <Btn lable="Home" onClick={toHome} />
          <Btn
            lable={`Cart(${store.length})`}
            onClick={toCart}
          />
          <Btn lable="Logout" onClick={logout} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
