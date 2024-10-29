import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  removeFromCartAction,
} from "../../../store/action";
import Btn from "../button/Btn";
import "./Card.css";

function Card({ id, img, desc, price, lable, stock }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Subscribe to the Redux state changes
  const cartItems = useSelector((state) => state.itemsToRenderInCart);

  const handleRemoveFromCart = (k) => {
    dispatch(removeFromCartAction(k));
  };

  const handleAddInCart = (k) => {
    dispatch(addToCart(k));
  };

  return (
    <div className="card" key={id}>
      <div className="coun">{stock}</div>
      <div className="item_img">
        <img src={`${img}`} alt="" width={"300px"} height={"auto"} />
      </div>
      <div className="item_desc">{desc}</div>
      <div className="item_price">{price}</div>
      <div className="item_add">
        <button onClick={() => handleRemoveFromCart(id)}>-</button>
        <input type="text" value="Remove/Add" readOnly />
        <button onClick={() => handleAddInCart(id)}>+</button>
      </div>
      <div className="item_button">
        <Btn
          lable={lable}
          onClick={() => {
            navigate(`/e-commerce-website/product/${id}`);
          }}
        ></Btn>
      </div>
    </div>
  );
}

export default Card;