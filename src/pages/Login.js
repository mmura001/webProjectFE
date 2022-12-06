import React, { useEffect, useState } from "react";

import "../App.css";
import { useDispatch } from "react-redux";
import { loginFunction } from "state/reducers/home.reducer";
import { Box } from "@material-ui/core";
import "../App.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(false);

  const [loginStatus, setLoginStatus] = useState("");

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const login = () => {
    if (email !== "") {
      const tempForm = {
        email: email,
        password: password,
      };
      dispatch(loginFunction(tempForm));
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
    switch (key) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="login">
        <Box style={{ paddingTop: 80 }}>
          <h1>Login</h1>
        </Box>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => handleInputChange(e, "email")}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => handleInputChange(e, "password")}
        />
        <ReCAPTCHA
          sitekey="6LcjBVcjAAAAABFlVjaFMdZQCu8o0c3SDLjRO_UK"
          onChange={onChange}
        />
        <button onClick={login} disabled={!verified}>
          {" "}
          Login{" "}
        </button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}
