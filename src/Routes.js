import React from "react";
import App from "./App";
import { Router, Switch, Route, Link } from "react-router-dom";
import Registration from "./pages/Registration";
import HomePage from "./HomePage/HomePage";
import HomePageLogged from "./HomePage/Home_page_logeed";
import ProfilePage from "./pages/Profile";
import Login from "./pages/Login";
import history from "./History";
import NewHome from "./NewHomeWithSearch/NewHome";
import NewWelcome from "./new_welcomehome/NewWelcome";
import ReadMore from "./readmore/readmore";
import InsertNew from "./new_welcomehome/insert_new";

export default function Routes() {
  return (
    <div>
      {" "}
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={NewHome} />
          <Route path="/signin" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={NewWelcome} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/readmore" component={ReadMore} />
          <Route path="/insert" component={InsertNew} />
        </Switch>
      </Router>
    </div>
  );
}
