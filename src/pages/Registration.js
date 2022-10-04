import React, { useEffect, useState } from "react";

import "../App.css";
import { useDispatch } from "react-redux";
import { registerFunction } from "../HomePage/homeSlice";
import { Box } from "@material-ui/core";

export default function Registration() {
  const dispatch = useDispatch();

  const [emailReg, setemailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  
  const register = () => {
    const tempForm = {
      username: usernameReg,
      email:emailReg,
      password: passwordReg,
    }
    dispatch(registerFunction(tempForm))
    
  };

  
  return (
    <div className="App">
      <div className="registration">
      <Box style={{ paddingTop:80 }}>
        <h1>Registration</h1>
        </Box>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setemailReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>

    </div>
  );
}