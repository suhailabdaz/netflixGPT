import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlaying)
    if(!movies) return 
    const movie=movies[9]
    const {original_title,overview,id}=movie
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackGround videoId={id}/>
    </div>
  )
}

export default MainContainer