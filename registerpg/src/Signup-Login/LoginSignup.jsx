import React,{useState} from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
// import person_icon from '../Assets/person.png';
import { Link, useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase'
import {   signOut } from "firebase/auth";


export const LoginSignup = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [loginEmail,setloginEmail] =  useState("");
    const [loginPassword, setloginPassword] =  useState("");
    const navigate = useNavigate()


    // we create a few new functions 
    const register = async (e) => {
        e.preventDefault()
        try{
            const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
             console.log(user)
             if(user){
                navigate('/')
             }
        } catch(error) {
            setErrorMessage(error.message)
            console.log(error.message)

        }

    }
    const logout = async () => {
        await signOut(auth)
    };
    

    return (
        <div className='container md'>
            <form onSubmit={register}>
                <div className="header">
                    <div className="text">Log-In</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {/* <div className="input">
                        <img src={person_icon} alt="" />
                        <input type="text" placeholder='Name' autoFocus   onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                    </div> */}
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email id'  onChange={(event) => {setloginEmail(event.target.value)}}/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password'   onChange={(event) => {setloginPassword(event.target.value)}}/>
                    </div>
                </div>
                <div className="forgot-password">lost Password? <span>Click here</span></div>
                <div className="submit-container">
                    <Link onClick={logout} to="/Tochecklogout" className="submit" type='submit'>log out</Link>
                    <button onClick={register} className="submit" type='submit'>Login</button>
                </div>
                {
                    errorMessage ? (
                        <div className='text-red-500'>{errorMessage}</div>
                    ) : (null)
                }
            </form>
        </div>
    );
};
