import React, { useEffect, useState } from "react";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import history from "../History";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setTokenFunc, TokenSelector } from "state/reducers/home.reducer";
import MenuAppBar from "../HomePage/Menu_bar";

const useStyles = makeStyles(() => ({
  toolbar: {
    // background:"Wh"
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const tokenSelector = useSelector(TokenSelector);

  useEffect(() => {
    console.log("Token", tokenSelector);
    console.log("Hello", localStorage.getItem("token"));
    if (
      localStorage.getItem("token") != null &&
      localStorage.getItem("token") != undefined
    ) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [tokenSelector]);

  const logoutFunction = () => {
    localStorage.removeItem("token");
    dispatch(setTokenFunc(false));
    history.push("/");
  };

  return (
    <div>
      <AppBar position="relative" color="transparent">
        <Toolbar className={classes.toolbar}>
          <div style={{ marginLeft: "auto" }}>
            {!loggedIn && (
              <Button variant="contained" onClick={() => history.push("/")}>
                Home
              </Button>
            )}
            {!loggedIn && (
              <Button
                variant="contained"
                onClick={() => history.push("/signin")}
              >
                Sign Up
              </Button>
            )}
            {!loggedIn && (
              <Button
                variant="contained"
                onClick={() => history.push("/login")}
              >
                Log In
              </Button>
            )}
            {loggedIn && (
              <Button variant="contained" onClick={logoutFunction}>
                Log out
              </Button>
            )}

            {loggedIn && <MenuAppBar />}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
