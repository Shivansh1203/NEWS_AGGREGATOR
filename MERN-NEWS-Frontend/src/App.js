import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Start from './components/Start';
import Login from './components/Login';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Private from "./PrivateRoute";

function App() {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Start/>} />
      <Route path="/private" element={<Private />} >
        <Route path="news" element={<Home />} />
       </Route>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/Signup' element={<Signup />} />
        
      </Routes>
    </>
  );
}

export default App;
