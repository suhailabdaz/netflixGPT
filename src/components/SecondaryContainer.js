import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movieList=useSelector((store)=>store.movies)
  return (
    <div className='bg-black'>
    <div className='-mt-52 relative z-20 pl-12 '>
        <MovieList title={"Now PLaying"} movies={movieList?.nowPlaying}/>
        <MovieList title={"Top Rated"} movies={movieList?.topRated}/>


        <MovieList title={"Popular"} movies={movieList?.popular}/>
        <MovieList title={"Upcoming"} movies={movieList?.upcoming}/>

        </div>
        
    </div>
  )
}

export default SecondaryContainer