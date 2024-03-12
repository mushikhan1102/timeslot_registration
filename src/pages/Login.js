import React from 'react';
import Navigation from '../components/nav_bar';
import "./styles.css"
import {auth, app} from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useState} from 'react';



const Login = () => {
    
  const {email, setEmail}= useState('');
  const {password, setPassword}= useState('');
  const signIn = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    console.log(userCredential);
    // ...
  })
  .catch((error) => {
    console.log(error)
    // ..
  });
  }

return(
    
    <>

    <Navigation></Navigation>
    <div className="container-signin">
        <section class="wrapper">
            <div class="heading">
                
                <h1 class="text text-large">
                    <strong>Sign In</strong>
                </h1>

                <p class="text text-normal"> New User? 
                    <span> <a href="/Signup" class= "text text-links"> Create Account </a>
                    </span>
                </p>
                
            </div>

            <form onSubmit={signIn}>
                <div class="input-control">

                    <input
                    type="email" placeholder="Enter Email" value={email} 
                    onChange ={(e)=> setEmail(e.target.value)} class="input-field"></input>
                </div>

                <div class="input-control">
                    <input
                    type="Access ID" placeholder="Enter Access ID" value={password} 
                    onChange ={(e)=> setPassword(e.target.value)} class="input-field"></input>

                </div>

                <button type="submit" name="submit" class="input-submit" value="Sign in">Sign In</button> 
            </form>
        </section>
    </div>
    
    </>

);

};

export default Login;