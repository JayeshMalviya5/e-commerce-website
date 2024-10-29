import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Card from "../UI/Cards/Card";
import "./ProductHome.css";
function ProductHome() {
  const store = useSelector((state) => state);
  // console.log("store", store);

  return (
    <>
      <Navbar />
      <div className="product_container">
        {store.originalList.map((item) => {
          return (
            <>
              <Card
                key={item.id}
                id={item.id}
                img={item.imgSrc}
                desc={item.name}
                price={item.price}
                // stock={item.availableQuantity}
                lable="More Details"
              />
              
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProductHome;
