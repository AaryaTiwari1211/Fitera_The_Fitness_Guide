import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Heading from './components/Heading/Heading'
import Navbar from './components/Navbar/Navbar'
import Home from '../src/pages/Home/Home'
import ContactUs from './pages/ContactUs/ContactUs'
import Login from '../src/pages/Login/Login'
import Footer from './components/Footer/Footer'
import Signup from '../src/pages/Signup/Signup'
import Membership from './pages/Membership/Membership'
import RecentCustomers from './pages/RecentCustomers/RecentCustomers'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='content'>
          <Heading />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/recents' element={<RecentCustomers />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/membership' element={<Membership />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
