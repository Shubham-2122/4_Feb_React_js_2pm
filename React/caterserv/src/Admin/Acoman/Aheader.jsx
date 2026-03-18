import React from 'react'
import { NavLink } from 'react-router-dom'

function Aheader() {
    return (
        <div>
            <div>
                {/* Navbar start */}
                <div className="container-fluid nav-bar">
                    <div className="container">
                        <nav className="navbar navbar-light navbar-expand-lg py-4">
                            <a href="index.html" className="navbar-brand">
                                <h1 className="text-primary fw-bold mb-0">Dashboard</h1>
                            </a>
                            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars text-primary" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav mx-auto">
                                    {/* <NavLink to="/" className="nav-item nav-link ">Home</NavLink> */}
                                    {/* <NavLink to="/about" className="nav-item nav-link">About</NavLink> */}
                                    <NavLink to="/servicemange" className="nav-item nav-link">Services</NavLink>
                                    <NavLink to="/event" className="nav-item nav-link">Events</NavLink>
                                    <NavLink to="/menu" className="nav-item nav-link">Menu</NavLink>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu bg-light">
                                            <NavLink to="/book" className="dropdown-item">Booking</NavLink>
                                            <NavLink to="/blog" className="dropdown-item">Our Blog</NavLink>
                                            <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                            <NavLink to="/test" className="dropdown-item">Testimonial</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Navbar End */}
               
            </div>
        </div>
    )
}

export default Aheader
