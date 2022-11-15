import { createSlice } from "@reduxjs/toolkit";
import history from "../../History";
// call dispatch function
import * as Api from "Api";
export const homeSlice = createSlice({
  name: "homeSlice",
  initialState: {
    // define initial list to be empty or default static values me,isSupervisor is state variable
    me: {},
    token: false,
  },
  reducers: {
    //to create an action to update state variable called list in the initial State
    setMe: (state, action) => {
      state.me = action.payload;
    },
    setTokenFunc: (state, action) => {
      state.token = action.payload;
    },
  },
});

//to expose actions that can be called from any where in the application
export const { setMe, setTokenFunc } = homeSlice.actions;

//to expose selectors when components need store values in store
export const UserMeSelector = (state) => state.homeSlice.me;
export const TokenSelector = (state) => state.homeSlice.token;

//make an api call & get list of announcements or assign static variables
export function getUserInfo() {
  //
  return async (dispatch) => {
    try {
      dispatch(setMe({}));
      Api.call(
        "/admin/myLipClaims",
        { method: "GET" },
        (response) => {
          //if success
          response = JSON.parse(response);
          dispatch(setMe(response["UserInfo"]));
        },
        (error, status, content) => {
          //error send to snackbar
        }
      );
    } catch (error) {
      dispatch(setMe({}));
    }
  };
}

export function registerFunction(form) {
  //
  return async (dispatch) => {
    try {
      Api.call(
        "/auth/register",
        { method: "POST", body: form },
        (response) => {
          //if success
          response = JSON.parse(response);
          localStorage.setItem("token", true);
          dispatch(setTokenFunc(true));
          dispatch(setMe({ name: "hello" }));
          history.push("/home");
        },
        (error, status, content) => {
          //error send to snackbar
          console.log("THE REGSTER ERRROR", error, status, content);
        }
      );
    } catch (error) {
      console.log("some message", error);
      dispatch(setMe({}));
    }
  };
}

export function loginFunction(form) {
  //
  return async (dispatch) => {
    try {
      Api.call(
        "/auth/login",
        { method: "POST", body: form },
        (response) => {
          //if success
          response = JSON.parse(response);
          localStorage.setItem("token", true);
          localStorage.setItem("email", response["email"]);
          localStorage.setItem("username", response["username"]);

          dispatch(setTokenFunc(true));
          dispatch(setMe(response));
          history.push("/home");

          // dispatch(setMe(response['UserInfo']));
        },
        (error, status, content) => {
          //error send to snackbar
          console.log("THE REGSTER ERRROR LOGIN", error, status, content);
        }
      );
    } catch (error) {
      console.log("some message login", error);
      dispatch(setMe({}));
    }
  };
}

export function updateFunction(form) {
  //
  return async (dispatch) => {
    try {
      Api.call(
        "/auth/profileusername",
        { method: "PUT", body: form },
        (response) => {
          //if success
          response = JSON.parse(response);
          localStorage.setItem("token", true);
          localStorage.setItem("email", response["email"]);
          localStorage.setItem("username", response["username"]);

          dispatch(setTokenFunc(true));
          dispatch(setMe(response));
          history.push("/profile");

          // dispatch(setMe(response['UserInfo']));
        },
        (error, status, content) => {
          //error send to snackbar
          console.log("THE REGSTER ERRROR LOGIN", error, status, content);
        }
      );
    } catch (error) {
      console.log("some message login", error);
      dispatch(setMe({}));
    }
  };
}

export function updatePasswordFunction(form) {
  //
  return async (dispatch) => {
    try {
      Api.call(
        "/auth/profilepassword",
        { method: "PUT", body: form },
        (response) => {
          //if success
          response = JSON.parse(response);
          localStorage.setItem("token", true);
          localStorage.setItem("email", response["email"]);
          localStorage.setItem("password", response["password"]);

          dispatch(setTokenFunc(true));
          dispatch(setMe(response));
          history.push("/profile");

          // dispatch(setMe(response['UserInfo']));
        },
        (error, status, content) => {
          //error send to snackbar
          console.log("THE REGSTER ERRROR LOGIN", error, status, content);
        }
      );
    } catch (error) {
      console.log("some message login", error);
      dispatch(setMe({}));
    }
  };
}

// to avoid class we write export default to make this useSlice.js available to weherever it is called.
export default homeSlice.reducer;
