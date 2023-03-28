import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Bug from '../pages/Bug';
import Feature from '../pages/Feature';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Newtask from '../pages/Newtask';
import Signup from '../pages/Signup';

import Story from '../pages/Story';


const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/bug" element={<Bug/>}></Route>
            <Route path="/feature" element={<Feature/>}></Route>
            <Route path="/story" element={<Story/>}></Route>
            <Route path="/newtask" element={<Newtask/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes





