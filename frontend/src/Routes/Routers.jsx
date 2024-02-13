import React from 'react';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import Doctor from '../Pages/Doctors/Doctor';
import DoctorDetails from '../Pages/Doctors/DoctorDetails';

import {Route,Routes} from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/doctors' element={<Doctor/>}/>
      <Route path='/doctor/:id' element={<DoctorDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default Routers