import React from 'react'
import Header from './Header'
import { auth } from '../utils/fireBase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Browse = () => {

  const navigate = useNavigate()
  const userinfo=useSelector(store=>store.user)

  const signoutHandle=()=>{
   signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/')
  
}).catch((error) => {
  // An error happened.
  navigate("/errorPage")
});

  }
  return (
    <div className='flex'>
      <Header/> 
      <div className='z-20 absolute flex my-[2vw] mr-0 ml-[79vw] items-center'>
        <img className="m-6 w-2/12 rounded-full " src={userinfo?.photoURL} alt='profile'/>
        <button className='m-3 p-1 w-4/12 h-12 bg-red-700 rounded-sm text-center text-lg font-mono text-slate-100' onClick={signoutHandle}>Sign-out</button> 
      </div>
    </div>
  );
}

export default Browse