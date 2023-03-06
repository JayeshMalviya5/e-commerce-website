import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADDTOCART, addToCart, REMOVEFROMCART, removeFromCartAction } from "../../../store/action";
import Btn from "../button/Btn";
import "./Card.css";
function Card({ id, img, desc, price, lable, stock }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state)=> state);

  const handleRemoveFromCart = (k) => {
    console.log("event triggred")
      dispatch(removeFromCartAction(k))
  };

  const handleAddInCart = (k) => {
    dispatch(addToCart(k))
  };
  return (
    <div className="card" key={id}>
      <div className="item_img">
        <img src={`${img}`} alt="" width={"300px"} height={"auto"} />
      </div>
      <div className="item_desc">{desc}</div>
      <div className="item_price">{price}</div>
      <div className="item_add">
        <button onClick={()=>{handleRemoveFromCart(id)}}>-</button>
        <input type="text" value="Remove / Add"/>
        <button onClick={()=>{handleAddInCart(id)}}>+</button>
      </div>
      <div className="item_button">
        <Btn
          lable={lable}
          onClick={() => {
            navigate(`/product/${id}`);
          }}
        ></Btn>
      </div>
    </div>
  );
}

export default Card;
