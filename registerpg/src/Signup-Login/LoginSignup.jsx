import React from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import person_icon from '../Assets/person.png';
import { Link } from "react-router-dom";

export const LoginSignup = () => {
    // Define state variables
    

    // Define handleSubmit function
    

    return (
        <div className='container md'>
            <form>
                <div className="header">
                    <div className="text">Sign-Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={person_icon} alt="" />
                        <input type="text" placeholder='Name' autoFocus  />
                    </div>
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email id' />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password'  />
                    </div>
                </div>
                <div className="forgot-password">lost Password? <span>Click here</span></div>
                <div className="submit-container">
                    <button className="submit" type='submit'>Sign Up</button>
                    <Link to="/signup" className="submit" type='submit'>Login</Link>
                </div>
            </form>
        </div>
    );
};
