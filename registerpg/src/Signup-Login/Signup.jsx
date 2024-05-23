import React, {useState} from 'react'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import './Signup.css'
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth"
import { auth } from '../firebase'




const Signup = () => {
    // holds the value when it changes 
  
    const [loginEmail,setLoginEmail] =  useState("");
    const [loginPassword,setLoginPassword] =  useState("");
    const [user,setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })




    // we create a few new functions 
    
    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth,loginEmail,loginPassword)
             console.log(user)
        } catch(error) {
            console.log(error.message)

        }

    }
    const login = async ( ) => {}
    const logout = async ( ) => {}


  
  return (
    <div className='container md'>
        <div className="header">
            <div className="text ">Log-In</div>
            <div className="underline"></div>
            
        </div>
        <div className="inputs">
            <div className="input" >
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email id' onChange={(event) => {setLoginEmail(event.target.value)}}/>
                
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="Password" placeholder='Password'  onChange={(event) => {setLoginPassword(event.target.value)}}/>
            </div>
        </div>
        <div className="forgot-password">lost Password? <span>Click here</span></div>
        <div>user </div>
        {user.email}
        <div className="submit-container">
            <Link to='/' onClick={register} className="submit"  type='submit'>Log In</Link> 
        </div>

    </div>
  )
}

export default Signup