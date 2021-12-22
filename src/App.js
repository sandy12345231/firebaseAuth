import React from 'react';
// import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "../index.css";
// import Login from "./Login";
import Signup from './component/SignUp';

// import {AuthProvider} from '../context/AuthContext'

export default function App() {
  return (<Router>
    <div className="App">
      
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Omnific</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
        {/* <AuthProvider> */}
          <Routes>
            <Route exact path='/' element={<Signup/>} />
            {/* <Route path="/sign-in" element={<Login/>} /> */}
            {/* <Route path="/sign-up" element={<Signup/>} /> */}
          </Routes>
        {/* </AuthProvider> */}
        </div>
      </div>
    </div>
    </Router>
  );
}

 