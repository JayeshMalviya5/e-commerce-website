import React from "react";
import { useSelector } from "react-redux";
import './Cart.css'
import Card from "../UI/Cards/Card";
import Navbar from "../Navbar/Navbar";
import Btn from "../UI/button/Btn";
function Cart() {
  const store = useSelector((state) => state.itemsToRenderInCart);
  
  return (
    <>
    {console.log("cart rerendered")}
    <Navbar />
    <div className="cart_product">
    
      {store.length > 0 ? (
        store.map((item) => {
          return (
            <Card
              key={item.product[0].id}
              id={item.product[0].id}
              img={item.product[0].imgSrc}
              desc={item.product[0].name}
              price={item.product[0].price}
              stock={item.count}
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
