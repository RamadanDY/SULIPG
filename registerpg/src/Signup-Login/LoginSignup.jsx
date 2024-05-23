import React,{useState} from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
// import person_icon from '../Assets/person.png';
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase'

export const LoginSignup = () => {
    const [registerEmail,setRegisterEmail] =  useState("");
    const [registerPassword, setRegisterpassword] =  useState("");


    // we create a few new functions 
    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
             console.log(user)
        } catch(error) {
            console.log(error.message)

        }

    }
    const login = async ( ) => {}
    const logout = async ( ) => {}
    

    return (
        <div className='container md'>
            <form>
                <div className="header">
                    <div className="text">Sign-Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {/* <div className="input">
                        <img src={person_icon} alt="" />
                        <input type="text" placeholder='Name' autoFocus   onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                    </div> */}
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email id'  onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password'   onChange={(event) => {setRegisterpassword(event.target.value)}}/>
                    </div>
                </div>
                <div className="forgot-password">lost Password? <span>Click here</span></div>
                <div className="submit-container">
                    <button className="submit" type='submit'>Sign Up</button>
                    <Link to="/signup" onClick={register} className="submit" type='submit'>Login</Link>
                </div>
            </form>
        </div>
    );
};
