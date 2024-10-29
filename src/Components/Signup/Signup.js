import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, database } from "../../Firebase";

import Btn from "../UI/button/Btn";
import "./Signup.css";
function Signup() {
 const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    repassword: "",
  });

  const { email, name, phone, password, repassword } = userData;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password,name)
      .then((userCredential) => {
        console.log(userCredential);
        const userRef = database.ref("users/" + userCredential.user.uid);
        userRef.set({ email });
        
        alert("User Created! Please login with Email-Id and password");
        navigate("/e-commerce-website/login");
      })
      .catch((error) => {
        console.log("error is ", error);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <form action="" method="post" onSubmit={handleCreateAccount}>
          <div className="input">
            <label htmlFor="">Email : </label>
            <input
              type="text"
              value={email}
              name="email"
              onChange={handleOnChange}
            />
          </div>
          <div className="input">
            <label htmlFor="">Name : </label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={handleOnChange}
            />
          </div>
          <div className="input">
            <label htmlFor="">Phone : </label>
            <input
              type="text"
              value={phone}
              name="phone"
              onChange={handleOnChange}
            />
          </div>
          <div className="input">
            <label htmlFor="">Password : </label>
            <input
              type="text"
              value={password}
              name="password"
              onChange={handleOnChange}
            />
          </div>
          <div className="input">
            <label htmlFor="">ReEnter Password : </label>
            <input
              type="text"
              value={repassword}
              name="repassword"
              onChange={handleOnChange}
            />
            {password !== repassword ? (
              <p style={{ color: "red" }}>Password didn't matched</p>
            ) : null}
          </div>
          <Btn lable="Signup" type="submit" />
          <div className="link">
            {
              <Link to="/e-commerce-website/login">
                Click to Go on Login page
              </Link>
            }
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
