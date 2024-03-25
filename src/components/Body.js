import React from 'react'
import Browse from './Browse'
import Login from './login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/Browse",
            element:<Browse/>
        }
    ])
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body