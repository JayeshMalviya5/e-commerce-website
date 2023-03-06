import React from "react";
import { useSelector } from "react-redux";
import './Cart.css'
import Card from "../UI/Cards/Card";
import Navbar from "../Navbar/Navbar";
function Cart() {
  const store = useSelector((state) => state.itemsToRenderInCart);
  
  return (
    <>
    <Navbar />
    <div className="cart_product">
    
      {store.length > 0 ? (
        store.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              img={item.imgSrc}
              desc={item.name}
              price={item.price}
              stock={item.availableQuantity}
              lable="More Details"
            />
          );
        })
      ) : (
        <h2 className="empty">Please add Items in Cart ! </h2>
      )}
    </div>
    </>
    
  );
}

export default Cart;
