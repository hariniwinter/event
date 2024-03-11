
// export default App


import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
//import React from 'react';
import Login from './components/login';
import Signup from './components/Signup';
import HomePage from './components/home';
import Upcomp from './components/upcomp';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Program from './components/Program';
import Form from './components/Form';
import Make from './components/Make';
import AdminPage from './components/AdminDashboard';
import AdminUserPage from './components/AdminUser';




// import Homepage from './components/Homepage';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Homepage' element={<HomePage/>}/>
      <Route path='/uc' element={<Upcomp/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/abt' element={<AboutUs/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/prog' element={<Program/>}/>
      <Route path='/fro' element={<Form/>}/>
      <Route path='/make' element={<Make/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/adminuser' element={<AdminUserPage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/adminuser' element={<AdminUserPage/>}/>
      
      


    </Routes>
    </Router>
  );
}
export default App;
