import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-56 px-16 w-screen aspect-video absolute text-slate-50  bg-gradient-to-tr from-black'>
        <h1 className='text-5xl font-bold w-4/12 m-4 '>{title}</h1>
        <p className='m-4 text-lg w-4/12'>{overview}</p>
        <div className='w-6/12'>
            <button className='m-6 p-2 bg-slate-600  font-bold text-xl rounded-3xl w-2/12 opacity-70 hover:scale-110 transition ease-in-out duration-500 hover:bg-white hover:text-black'>Play</button>
            <button className='m-6 p-2 ml-2 bg-transparent  border-2 border-white font-semibold text-lg rounded-3xl w-2/12 h-auto'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle