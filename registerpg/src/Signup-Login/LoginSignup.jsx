import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import person_icon from '../Assets/person.png';
import { Link } from "react-router-dom";
import axios from 'axios';

export const LoginSignup = () => {
    // Define state variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Define handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3004/register', { name, email, password })
            .then(result => console.log(result))
            .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className='container md' >
            <div className="header">
                <div className="text">Sign-Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input" >
                    <img src={person_icon} alt="" />
                    <input type="text" placeholder='Name' autoFocus onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input" >
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email id' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="forgot-password">lost Password? <span>Click here</span></div>
            <div className="submit-container">
                <button className="submit" type='submit'>Sign  Up</button>
                <Link to="/signup" className="submit" type='submit'>Login</Link>
            </div>
        </div>
        </form>
    );
};
