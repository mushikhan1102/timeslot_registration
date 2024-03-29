import React from 'react';
import Navigation from '../components/nav_bar';
import "./styles.css"

const Login = () => {

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

            <form>
                <div class="input-control">

                    <input
                    type="email" placeholder="Enter Email" class="input-field"></input>
                </div>

                <div class="input-control">
                    <input
                    type="Access ID" placeholder="Enter Access ID" class="input-field"></input>

                </div>

                <button type="submit" name="submit" class="input-submit" value="Sign in">Sign In</button> 
            </form>
        </section>
    </div>
    
    </>

);

};

export default Login;