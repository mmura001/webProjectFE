import React, { useEffect, useState } from "react";

import "../App.css";
import { useDispatch } from "react-redux";
import { loginFunction } from "../HomePage/homeSlice";
import { Box } from "@material-ui/core";
import "../App.css";
import { registerFunction } from "../HomePage/homeSlice";


export default function Login() {

  
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");



  const login = () => {
    if(email !== ''){
      const tempForm = {
        email: email,
      password: password
    }
      dispatch(loginFunction(tempForm))

    }
    

    // Axios.post("http://localhost:3001/login", {
    //     email: email,
      
    //   password: password,
    // }).then((response) => {
    //   if (response.data.message) {
    //     setLoginStatus(response.data.message);
    //   } else {
    //     setLoginStatus(response.data[0].username);
    //   }
    // });
  };
// why are we doing this
  const handleInputChange = (e, key) => {
    switch(key){
      case 'email':
        setEmail(e.target.value)
        break;
      case 'password':
        setPassword(e.target.value);
        break
      default:
        break
    }
  }

  
  return (
    <div className="App">
      <div className="login">
        
      <Box style={{ paddingTop:80 }}>
        <h1 >Login</h1>
        </Box>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => handleInputChange(e, 'email')}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => handleInputChange(e, 'password')}
        />
        <button onClick={login}> Login </button>
        
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}