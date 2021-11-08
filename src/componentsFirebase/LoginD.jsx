import React, {useState} from "react";
import google from './googleicon.png';
import {auth} from '../firebase/firebaseConfig';
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithRedirect, 
  GoogleAuthProvider 
} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider();

function LoginD() {
    const[signUp, setSignUp] = useState(false);

    const submitHandler= async (e)=>{
        e.preventDefault();
        const email = e.target.inputEmail.value;
        const password = e.target.inputPassword.value;
        console.log(email, password);
        if(signUp){
            //Si se registra
            const user= await createUserWithEmailAndPassword(auth, email, password);
            console.log(user)

        } else {
            //si esta iniciando sesion 
            signInWithEmailAndPassword(auth, email, password);
        }
        
    }

  return (
    <section className="container" >
        <h1>{signUp ? "Sign Up": "Log In"}</h1>
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group" >
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
            {signUp ? "Sign Up": "Log In"}
        </button>
      </form>

      <br/>
      <p>Log in with:</p>
      <button className='btn ' type='submit' onClick={()=>signInWithRedirect(auth, googleProvider)}> <img src={google} style={{ width: '30px', height:'30px' }}alt='google-Icon'/> </button>

      <hr/>

      <button className='btn btn-primary'  onClick={()=> setSignUp(!signUp)}>
      { signUp ? "¿Already have an account? Log In" : "Don't have an account? Sign Up"}
      </button>

    </section>
  );
}

 export {LoginD}
