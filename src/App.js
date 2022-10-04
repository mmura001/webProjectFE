import './App.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Routes from './Routes';
import NavBar from './NavBar/NavBar'


function App() {
  return (
    <div className="App">
      <Routes style={{height:'100vh'}}/>

      <NavBar/>

    </div>
  );
}

export default App;
