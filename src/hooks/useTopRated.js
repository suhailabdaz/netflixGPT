import { useDispatch } from "react-redux"
import {  addTopRated } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/cosntants"
import { useEffect } from "react"


const useTopRated = ()=>{
const dispatch=useDispatch()
const getNowPlaying=async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)

    const json=await data.json()
    dispatch(addTopRated(json.results));
  }

  useEffect(()=>{
    getNowPlaying()
  },[])
}

export default useTopRated