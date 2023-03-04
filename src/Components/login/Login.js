import React, { useState } from "react";
import "./Login.css";
import {client} from "../../AxiosClient";
import { FormControl, FormLabel} from "@chakra-ui/react";
import Btn from "../UI/button/Btn";
// import Navbar from "../Navbar/Navbar";
import {  useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    setError("");
      if(email && password){
        const body = {email, password};
        client.post("login",body)
        .then((resp)=>{
          console.log("response",resp);
          window.localStorage.setItem("token",resp.data.token);
          navigate("/product");
        })
        .catch((err) => {
          setError(err.response.data.error);
          console.log("after login click",err.response.data.error)
        });
      }
  };
  const handleInput = (event) => {
     const {name,value} = event.target;
     name==="email" ? setEmail(value) : setPassword(value);
  }
  
  return (
    <>
    <div className="login_info">
    Note : Please use <br />
    Email : eve.holt@reqres.in <br />
    password : cityslicka
      <div>
        <FormControl mx="auto">
          <FormLabel>Email</FormLabel>
          <input type="email" name="email" value={email} onChange={handleInput} />
          <FormLabel mt={"10px"}>Password</FormLabel>
          <input type="email" name="password" value={password} onChange={handleInput}/>
        </FormControl>
        <div className="login_button">
        <Btn lable="Login" onClick={handleClick} />
        </div>
        
      </div>
    </div>
    {/* <Navbar /> */}
    </>
    
  );
}

export default Login;
