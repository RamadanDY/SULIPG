import React, { useState, useEffect } from 'react';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import './Signup.css';
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';

const Signup = () => {
  // Holds the value when it changes
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // This displays the user that is logged in
  const [user, setUser] = useState(null);

  // Set up the onAuthStateChanged listener in a useEffect hook
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // We set the user to just the current user
      setUser(currentUser);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  // Create a few new functions
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {};


//   how to signout 
  const logout = async () => {
    await signOut(auth)
  };

  return (
    <div className='container md'>
      <div className="header">
        <div className="text">Sign-Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input 
            type="email" 
            placeholder='Email id' 
            onChange={(event) => setLoginEmail(event.target.value)} 
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input 
            type="password" 
            placeholder='Password' 
            onChange={(event) => setLoginPassword(event.target.value)} 
          />
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click here</span></div>
      <div>User:</div>
      {user && user.email ? <div>{user.email}</div> : <div>No user logged in</div>}
      <div className="submit-container">
        <Link to='/Log-In' onClick={register} className="submit" type='submit'>Sign Up</Link>
      </div>
    </div>
  );
}

export default Signup;





// import React, {useState} from 'react'
// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'
// import './Signup.css'
// import { Link } from "react-router-dom";
// import { createUserWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth"
// import { auth } from '../firebase'
// // the auth contains details of the user that logged in 



// const Signup = () => {
//     // holds the value when it changes 
  
//     const [loginEmail,setLoginEmail] =  useState("");
//     const [loginPassword,setLoginPassword] =  useState("");


//    // this display the user that is logged in 
//     const [user,setUser] = useState({});
//     // we call the onauth  as a callback  and  pass the auth  variable and grab the current user 
//     // just like useEffect  
//     onAuthStateChanged(auth, (currentUser) => {
//         // we set the user to just the current user 
//         setUser(currentUser)
//     })


//     // we create a few new functions 
    
//     const register = async () => {
//         try{
//             const user = await createUserWithEmailAndPassword(auth,loginEmail,loginPassword)
//              console.log(user)
//         } catch(error) {
//             console.log(error.message)

//         }

//     }
//     const login = async ( ) => {}
//     const logout = async ( ) => {}


  
//   return (
//     <div className='container md'>
//         <div className="header">
//             <div className="text ">Log-In</div>
//             <div className="underline"></div>
            
//         </div>
//         <div className="inputs">
//             <div className="input" >
//                 <img src={email_icon} alt="" />
//                 <input type="email" placeholder='Email id' onChange={(event) => {setLoginEmail(event.target.value)}}/>
                
//             </div>
//             <div className="input">
//                 <img src={password_icon} alt="" />
//                 <input type="Password" placeholder='Password'  onChange={(event) => {setLoginPassword(event.target.value)}}/>
//             </div>
//         </div>
//         <div className="forgot-password">lost Password? <span>Click here</span></div>
//         <div>user </div>
//         {user.email}
//         <div className="submit-container">
//             <Link to='/' onClick={register} className="submit"  type='submit'>Log In</Link> 
//         </div>

//     </div>
//   )
// }

// export default Signup