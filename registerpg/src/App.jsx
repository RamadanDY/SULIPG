// import { useState } from 'react'

import './App.css'
import { LoginSignup } from './Signup-Login/LoginSignup'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './Signup-Login/Signup'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/register' element={<LoginSignup />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </Router>
  )
}

export default App
