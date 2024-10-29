import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Btn from "../UI/button/Btn";
import "./Details.css";
function Details() {
  const store = useSelector((state)=> state);
  
  const [detailProduct, setDetailProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const tempDetails = store.originalList.filter((item) => {
      if (params.productId === item.id) {
        return item;
      }
    });
    setDetailProduct(tempDetails);
  }, []);

  const goToHome = () => {
    navigate("/e-commerce-website/product");
  };

  return (
    <div>
      <Navbar />
      {console.log(detailProduct)}
      <div className="content">
        <div className="image">
          <img
            src={`${detailProduct[0]?.imgSrc}`}
            alt=""
            width={"350px"}
            
          />
        </div>
        <div className="info">
          <div className="title">{detailProduct[0]?.name}</div>

          <div className="warranty">{detailProduct[0]?.desc.warranty}</div>

          <div className="price">{detailProduct[0]?.price}</div>

          <div className="features">
            <h3>Key Features</h3>
            <ol>
              {detailProduct[0]?.desc.keyFeatures.map((item, idx) => {
                return <li key={idx}>{item}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
      <div className="button">
        <Btn onClick={goToHome} lable="Back" />
      </div>
    </div>
  );
}

export default Details;
