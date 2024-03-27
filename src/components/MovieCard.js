import React from 'react'
import { imagePath } from '../utils/cosntants'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 p-4 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
        <img src={imagePath+posterpath}/>
    </div>
  )
}

export default MovieCard