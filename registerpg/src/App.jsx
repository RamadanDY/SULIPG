// import { useState } from 'react'

import './App.css'
import { LoginSignup } from './Signup-Login/LoginSignup'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './Signup-Login/Signup'
import Home from './Signup-Login/Home'
import Tochecklogout from './Signup-Login/Tochecklogout'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/Tochecklogout' element={<Tochecklogout />}/>
        <Route path='/Login' element={<LoginSignup />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
