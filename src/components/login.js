import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/fireBase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { avatar } from '../utils/cosntants';
import { bg_image } from '../utils/cosntants';

const Login = () => {
    const [IsSigninForm,setIsSigninForm]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null)
    const [isSuccess,setIsSuccess]=useState(false)
    const navigate=useNavigate()
    const dispatch=useDispatch()


    useEffect(()=>{
      setIsSuccess(false)
    })

    const formEmail=useRef(null)
    const formPassword=useRef(null)
    const formName=useRef(null)
    const email = formEmail.current?.value;
    const password = formPassword.current?.value;


    

    const handleSigninForm=()=>{
        setIsSigninForm(!IsSigninForm)
    }

    const handleForm=()=>{
        const message=validate(formEmail.current.value,formPassword.current.value)
        setErrorMessage(message)
        if(message) return ;

        if(!IsSigninForm){
            createUserWithEmailAndPassword(auth, email,password)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;

              updateProfile(user, {
                displayName: formName.current.value, photoURL: avatar
              }).then(() => {
                // Profile updated!
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayname:displayName,photoURL:photoURL}))
                navigate("/browse")

                // ...
              }).catch((error) => {
                // An error occurred
                // ..
                setErrorMessage(error)         

              });

              setIsSuccess(true)
              setErrorMessage("Sucessfully created")


              // ...+
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+" "+errorMessage)         
              // ..
            });

        }else{
            signInWithEmailAndPassword(auth, email,password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setIsSuccess(true)
              setErrorMessage("logged in")
              navigate('/browse')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" "+errorMessage)

  });

        }

    }
   
  return (
    <div>
    <Header/>
    <div className='absolute'>
        <img  className='brightness-50' src={bg_image} 
        srcset="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" 
         alt='img' />
    </div>
    
    <form  onSubmit={(e)=>{e.preventDefault()}} className='bg-opacity-85 absolute bg-black p-12 w-3/12 mt-36 mx-auto right-0 left-0 text-white rounded-md' >
    <h1 className=' text-2xl text-slate-50 font-semibold m-2'>{IsSigninForm?"Sign-in":"Sign-up"}</h1>
    {! IsSigninForm &&<input type='text' ref={formName} placeholder='Full Name' className='p-3 my-4 w-full bg-black border-2 border-slate-50'/>}
        <input type='text' ref={formEmail} placeholder='E-mail Address' className='p-3 my-4 w-full bg-black border-2 border-slate-50'/>
        <input type='password'  ref={formPassword} placeholder='Password' className='p-3 my-4 w-full  bg-black border-2  border-slate-50'/>
        {errorMessage && <p className={isSuccess ? 'text-red-700' : 'text-green-600'}>{errorMessage}</p>}
        <button onClick={()=>handleForm()} className='p-3 my-4 w-full bg-red-700 font-semibold'>{IsSigninForm ?" Sign-in":"Sign-up"}</button>
        <p className='text-base text-white cursor-pointer' onClick={()=>handleSigninForm()}>{IsSigninForm?"New to Netflix ? Sign-up":"Already a user ? Sign-in"}</p>
    </form> 

  
    </div>
  )
}

export default Login