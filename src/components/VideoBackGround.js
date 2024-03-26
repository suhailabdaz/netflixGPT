import React, { useEffect} from 'react'
import { API_OPTIONS } from '../utils/cosntants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import useGetMovieVideos from '../hooks/useGetMovieVideos';

const VideoBackGround = ({videoId}) => {
    const trailerId= useSelector((store)=>store.movies.trailerId)

    useGetMovieVideos(videoId)
   
  
  return (
    <div className='w-screen'><iframe
    className="w-screen aspect-video" 
    src={"https://www.youtube.com/embed/"+trailerId+"?autoplay=1&mute=1"}
     title="YouTube video player"
     allowFullScreen
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      >

      </iframe>
      </div>
  )
}

export default VideoBackGround