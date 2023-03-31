import React, { useState } from 'react'
import {auth, provider } from './firebase'
import './login.css'
import { useStateValue } from './Stateprovider'

function Login() {
const [{},dispatch] = useStateValue();
  const signIn = () =>{
    auth.signInWithPopup(provider).then(result=>{
        var credential = result.credential;
        const photoUrl = result.user.photoURL;
        console.log(photoUrl);
        dispatch({
          type:"SET_USER",
          user:{
            displayName:result.user.displayName,
            photoUrl:photoUrl
          }
        })
    }).catch(error => console.log(error))
  }

  return (
    <div className='login-wrapper'>
        <div className="login">
            <img src="https://st2.depositphotos.com/25708564/48330/v/600/depositphotos_483302782-stock-illustration-indian-farmer-india-map-vector.jpg" alt="" />
            <h2>Sign in with Google</h2>
            <button onClick={signIn}>Login with Google</button>
        </div>
    </div>
  )
}

export default Login