import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../button/Btn";
import './Card.css'
function Card({id, img, desc, price, lable }) {
    const navigate = useNavigate();
  return (
    <div className="card" key={id}>
      <div className="item_img">
        <img src={`${img}`} alt="" width={"300px"} height={"auto"} />
      </div>
      <div className="item_desc">{desc}</div>
      <div className="item_price">{price}</div>
      <div className="item_add">
        Space to addcart feature
      </div>
      <div className="item_button">
        <Btn lable={lable} onClick={() => {
            navigate(`/product/${id}`);
          }}></Btn>
      </div>
    </div>
  );
}

export default Card;
