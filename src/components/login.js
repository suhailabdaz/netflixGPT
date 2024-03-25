import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
    const [IsSigninForm,setIsSigninForm]=useState(true)

    const handleSigninForm=()=>{
        setIsSigninForm(!IsSigninForm)
    }
  return (
    <div>
    <Header/>
    <div className='absolute'>
        <img  className='brightness-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
        srcset="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" 
         alt='img' />
    </div>
    
    <form className='bg-opacity-85 absolute bg-black p-12 w-3/12 mt-36 mx-auto right-0 left-0 text-white rounded-md' >
    <h1 className=' text-2xl text-slate-50 font-semibold m-2'>{IsSigninForm?"Sign-in":"Sign-up"}</h1>
    {! IsSigninForm &&<input type='text' placeholder='Full Name' className='p-3 my-4 w-full bg-black border-2 border-slate-50'/>}
        <input type='text' placeholder='E-mail Address' className='p-3 my-4 w-full bg-black border-2 border-slate-50'/>
        <input type='text' placeholder='Password' className='p-3 my-4 w-full  bg-black border-2  border-slate-50'/>
        <button className='p-3 my-4 w-full bg-red-700 font-semibold'>{IsSigninForm ?" Sign-in":"Sign-up"}</button>
        <p className='text-base text-white cursor-pointer' onClick={()=>handleSigninForm()}>{IsSigninForm?"New to Netflix ? Sign-up":"Already a user ? Sign-in"}</p>
    </form> 

  
    </div>
  )
}

export default Login