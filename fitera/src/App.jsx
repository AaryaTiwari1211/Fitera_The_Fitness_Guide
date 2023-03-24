import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Heading from './components/Heading/Heading'
import Navbar from './components/Navbar/Navbar'
import Home from '../src/pages/Home/Home'
import Login from '../src/pages/Login/Login'
import Signup from '../src/pages/Signup/Signup'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Heading />
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
