import React, { useEffect, useState } from "react";

import "../App.css";
import { useDispatch } from "react-redux";
import { registerFunction } from "state/reducers/home.reducer";
import { Box } from "@material-ui/core";
import ReCAPTCHA from "react-google-recaptcha";

export default function Registration() {
  const [verified, setVerified] = useState(false);
  const dispatch = useDispatch();

  const [emailReg, setemailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const register = () => {
    const tempForm = {
      username: usernameReg,
      email: emailReg,
      password: passwordReg,
    };
    dispatch(registerFunction(tempForm));
  };

  return (
    <div className="App">
      <div className="registration">
        <Box style={{ paddingTop: 80 }}>
          <h1>Registration</h1>
        </Box>
        <label>Full Name</label>
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
        <ReCAPTCHA
          sitekey="6LcjBVcjAAAAABFlVjaFMdZQCu8o0c3SDLjRO_UK"
          onChange={onChange}
        />
        <button onClick={register} disabled={!verified}>
          {" "}
          Register{" "}
        </button>
      </div>
    </div>
  );
}
