import React from 'react'
import App from './App';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registration from './pages/Registration';
import HomePage from './HomePage/HomePage';
import HomePageLogged from './HomePage/Home_page_logeed'
import ProfilePage from './pages/Profile';
import Login from './pages/Login';
import history from './History';

export default function Routes () {
    return <div> <Router history={history}>
      <Switch>
      <Route path='/' exact component={HomePage} />
        <Route path='/signin' component={Registration} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={HomePageLogged} />
        <Route path='/profile' component={ProfilePage} />
        </Switch>
        </Router>
        </div>
        ;
}