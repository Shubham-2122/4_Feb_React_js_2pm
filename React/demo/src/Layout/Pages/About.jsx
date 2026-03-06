import React from 'react'
import Header from '../Comana/Header'
import Footer from '../Comana/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <Header />
            <h1 className='bg-success p-5 text-light'>Hello this About Pages</h1>
            <Link to="/about/about1" className='btn btn-info mx-2'>About 1</Link>
            <Link to="/about/about2" className='btn btn-danger'>About 2</Link>

            <Outlet />

            <Footer />
        </div>
    )
}

export default About
