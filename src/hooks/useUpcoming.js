import { useDispatch } from "react-redux"
import {   addUpcoming } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/cosntants"
import { useEffect } from "react"


const useUpcoming = ()=>{
const dispatch=useDispatch()
const getNowPlaying=async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)

    const json=await data.json()
    dispatch(addUpcoming(json.results));
  }

  useEffect(()=>{
    getNowPlaying()
  },[])
}

export default useUpcoming