import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import Heros from '../Coman/Heros'
import Footer from '../Coman/Footer'
import axios from 'axios'

function Service() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("https://returent-backend.onrender.com/api/services")
            console.log(res.data.data)
            setservice(res.data.data)
        } catch (error) {
            console.log("Api data not Found", error)
        }
    }

    return (
        <div>
            <Header />
            <Heros title="Services" name="Services" />
            <div>
                {/* Service Start */}
                <div className="container-fluid service py-6">
                    <div className="container">
                        <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Services</small>
                            <h1 className="display-5 mb-5">What We Offer</h1>
                        </div>
                        <div className="row g-4">
                            {
                                service && service.map((data, index) => {
                                    const {_id,title,description,icon} = data
                                    return (
                                        <div key={_id} className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                                            <div className="bg-light rounded service-item">
                                                <div className="service-content d-flex align-items-center justify-content-center p-4">
                                                    <div className="service-content-icon text-center">
                                                        <i className={`${icon} fa-7x text-primary mb-4`} />
                                                        <h4 className="mb-3">{title}</h4>
                                                        <p className="mb-4">{description.slice(0,35)}...</p>
                                                        <a href="#" className="btn btn-primary px-4 py-2 rounded-pill">Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* Testimonial Start */}
                <div className="container-fluid py-6">
                    <div className="container">
                        <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Testimonial</small>
                            <h1 className="display-5 mb-5">What Our Customers says!</h1>
                        </div>
                        <div className="owl-carousel owl-theme testimonial-carousel testimonial-carousel-1 mb-4 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="testimonial-item rounded bg-light">
                                <div className="d-flex mb-3">
                                    <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle flex-shrink-0" alt />
                                    <div className="position-absolute" style={{ top: 15, right: 20 }}>
                                        <i className="fa fa-quote-right fa-2x" />
                                    </div>
                                    <div className="ps-3 my-auto">
                                        <h4 className="mb-0">Person Name</h4>
                                        <p className="m-0">Profession</p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="d-flex">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                    <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="testimonial-item rounded bg-light">
                                <div className="d-flex mb-3">
                                    <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle flex-shrink-0" alt />
                                    <div className="position-absolute" style={{ top: 15, right: 20 }}>
                                        <i className="fa fa-quote-right fa-2x" />
                                    </div>
                                    <div className="ps-3 my-auto">
                                        <h4 className="mb-0">Person Name</h4>
                                        <p className="m-0">Profession</p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="d-flex">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                    <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="testimonial-item rounded bg-light">
                                <div className="d-flex mb-3">
                                    <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle flex-shrink-0" alt />
                                    <div className="position-absolute" style={{ top: 15, right: 20 }}>
                                        <i className="fa fa-quote-right fa-2x" />
                                    </div>
                                    <div className="ps-3 my-auto">
                                        <h4 className="mb-0">Person Name</h4>
                                        <p className="m-0">Profession</p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="d-flex">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                    <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="testimonial-item rounded bg-light">
                                <div className="d-flex mb-3">
                                    <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle flex-shrink-0" alt />
                                    <div className="position-absolute" style={{ top: 15, right: 20 }}>
                                        <i className="fa fa-quote-right fa-2x" />
                                    </div>
                                    <div className="ps-3 my-auto">
                                        <h4 className="mb-0">Person Name</h4>
                                        <p className="m-0">Profession</p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="d-flex">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                    <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="owl-carousel testimonial-carousel testimonial-carousel-2 wow bounceInUp" data-wow-delay="0.3s">
                            <div className="testimonial-item rounded bg-light">
                                <div className="d-flex mb-3">
                                    <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle flex-shrink-0" alt />
                                    <div className="position-absolute" style={{ top: 15, right: 20 }}>
                                        <i className="fa fa-quote-right fa-2x" />
                                    </div>
                                    <div className="ps-3 my-auto">
                                        <h4 className="mb-0">Person Name</h4>
                                        <p className="m-0">Profession</p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="d-flex">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                    <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="testimonial-item rounded bg-light">
                                <div className="d-flex mb-3">
                                    <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle flex-shrink-0" alt />
                                    <div className="position-absolute" style={{ top: 15, right: 20 }}>
                                        <i className="fa fa-quote-right fa-2x" />
                                    </div>
                                    <div className="ps-3 my-auto">
                                        <h4 className="mb-0">Person Name</h4>
                                        <p className="m-0">Profession</p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="d-flex">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                    <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="testimonial-item rounded bg-light">
                                <div className="d-flex mb-3">
                                    <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle flex-shrink-0" alt />
                                    <div className="position-absolute" style={{ top: 15, right: 20 }}>
                                        <i className="fa fa-quote-right fa-2x" />
                                    </div>
                                    <div className="ps-3 my-auto">
                                        <h4 className="mb-0">Person Name</h4>
                                        <p className="m-0">Profession</p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="d-flex">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                    <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="testimonial-item rounded bg-light">
                                <div className="d-flex mb-3">
                                    <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle flex-shrink-0" alt />
                                    <div className="position-absolute" style={{ top: 15, right: 20 }}>
                                        <i className="fa fa-quote-right fa-2x" />
                                    </div>
                                    <div className="ps-3 my-auto">
                                        <h4 className="mb-0">Person Name</h4>
                                        <p className="m-0">Profession</p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="d-flex">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                    <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>
            <Footer />


        </div>
    )
}

export default Service
