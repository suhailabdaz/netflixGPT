import React from 'react'
import Header from './Header'
import { auth } from '../utils/fireBase'
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import useNowPLaying from '../hooks/useNowPlaying';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './mainContainer';
import usePopular from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';

const Browse = () => {
  const userinfo=useSelector(store=>store.user)

    useNowPLaying();
    usePopular();
    useTopRated();
    useUpcoming()
  

  const signoutHandle=()=>{
   signOut(auth).then(() => {
  // Sign-out successful.  
}).catch((error) => {
  // An error happened.
});

  }
  return (
    <div>
    <div className='flex'>
      <Header/> 
      <div className='z-20 absolute flex my-[2vw] mr-0 ml-[79vw] items-center'>
      <button className='m-2 p-2 rounded-lg'>GPT Search</button>
        <img className="m-6 w-2/12 rounded-full " src={userinfo?.photoURL} alt='profile'/>
        <button className='m-3 p-1 w-4/12 h-12 bg-red-700 rounded-sm text-center text-lg font-mono text-slate-100' onClick={signoutHandle}>Sign-out</button> 
      </div>
    </div>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  );
}

export default Browse