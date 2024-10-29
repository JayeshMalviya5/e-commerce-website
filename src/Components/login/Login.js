import React, { useState } from "react";
import "./Login.css";
import { auth, database } from "../../Firebase";
import { FormControl, FormLabel } from "@chakra-ui/react";
import Btn from "../UI/button/Btn";
// import Navbar from "../Navbar/Navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await auth.signInWithEmailAndPassword(email, password);
      if (data) {
        localStorage.setItem("token", data.user.auth.uid);
      }
    } catch (error) {
      alert("Please enter valid userName and password");
    }
    if (localStorage.getItem("token")) {
      navigate("/e-commerce-website/product");
    }
  };
  const handleInput = (event) => {
    const { name, value } = event.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  return (
    <>
      {/* <Signup /> */}
      <div className="login_info">
        Note : Please use <br />
        Email : eve.holt@reqres.in <br />
        password : cityslicka
        <div>
          <form action="" onSubmit={handleLogin}>
            <FormControl mx="auto">
              <FormLabel>Email</FormLabel>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInput}
              />
              <FormLabel mt={"10px"}>Password</FormLabel>
              <input
                type="email"
                name="password"
                value={password}
                onChange={handleInput}
              />
              <div className="login_button">
                <Btn lable="Login" type="submit" />
              </div>
              <div
                className="sign"
                style={{ color: "black", marginTop: "20px" }}
              >
                Dont have account ? <br />
                <Link to="/signup" style={{ color: "blue" }}>
                  Click to create account
                </Link>
              </div>
            </FormControl>
          </form>
        </div>
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default Login;
