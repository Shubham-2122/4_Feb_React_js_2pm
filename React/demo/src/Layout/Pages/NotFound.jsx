import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

    const redirect = useNavigate()

    const backHome=()=>{
        console.log("Hello back Home")
        redirect("/")
    }

  return (
    <div>
      <h1 className='bg-danger text-center text-light p-5'>404 NOT FOUND PAGE</h1>
      <Link to="/" className='btn btn-success'>Back to home</Link>

      <button onClick={backHome} className='btn btn-info mx-2'>Back To Home 2</button>
    </div>
  )
}

export default NotFound
