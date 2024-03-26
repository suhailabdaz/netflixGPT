import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  if (!movies) {
    return null; // or you can return a loading indicator or an error message
  }
  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-6 text-slate-50 m-' >{title}</h1>

    <div className='flex overflow-x-scroll  scrollbar-hidden '>
    <div className='flex '>
        {movies.map((movie)=>(
            <MovieCard key={movie.id} posterpath={movie.poster_path}/>))}
    </div>
    </div>
    </div>
  )


}

export default MovieList