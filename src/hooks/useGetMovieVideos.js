import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/cosntants"
import { addTrailerVideo } from "../utils/movieSlice"


const useGetMovieVideos=(videoId)=>{

    const dispatch=useDispatch()
   

    const getMovieVideos=async()=>{
        const videos = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`, API_OPTIONS)
        const json = await videos.json()
    
        const trailers= json.results.filter((video)=>video.type==="Trailer")
        const trailer=trailers.length>1 ? trailers[1] : json.results[0]
        dispatch(addTrailerVideo(trailer.key))
    }
    useEffect(()=>{
        getMovieVideos()
    },[])

}

export default useGetMovieVideos