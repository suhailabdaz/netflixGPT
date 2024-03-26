import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/fireBase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { headerLogo } from '../utils/cosntants';

const Header = () => {
  const navigate=useNavigate()

  const dispatch=useDispatch()
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
 if (user) {
   
   const {uid,email,displayName,photoURL} = user;
   dispatch(addUser({uid:uid,email:email,displayname:displayName,photoURL:photoURL}))
   navigate("/browse")
   // ...
 } else {
   
   dispatch(removeUser())
   navigate("/")

 }
});
return ()=>unsubscribe()
},[])
  return (
    <div className='absolute  px-32 py-3 bg-gradient-to-b from-black w-full '>
        <img className="w-56" src={headerLogo} alt='logo'/>
    </div>
  )
}

export default Header