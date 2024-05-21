import React from 'react';
import Homes from './homes/Homes';
import Course from './components/Course';
import Login from './components/Login';
import Signup from './components/Signup';
import Courses from './courses/Courses';
import {Route, Routes } from "react-router-dom";
function App() {
  return (
   <>
   <div className="bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Homes/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>

      
    </Routes>
    </div>
   </>
  )
}

export default App