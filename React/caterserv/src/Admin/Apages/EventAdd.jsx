import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Aheros from '../Acoman/Aheros'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function EventAdd() {

    const redirect = useNavigate()

    

    const [form, setform] = useState({
        img: "",
        category: ""
    })

    const getchange = (e) => {
        if (e.target.name === "img") {
            setform({
                ...form,
                img: e.target.files[0]
            });
        } else {
            setform({
                ...form,
                [e.target.name]: e.target.value
            });
        }
    }

    const EventSubmit = async (e) => {
        e.preventDefault()

        try {
            if (form.category == "" || form.img == "") {
                console.log("pls Data field..")
                return false
            }

            const res = await axios.post("https://returent-backend.onrender.com/api/events", form, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log(res.data)
            setform({
                img: "",
                category: ""
            })
            console.log("Events Add Successfully")
            redirect("/eventsmange")
        } catch (error) {
            console.log("APi data not Found", error)
        }
    }

    return (
        <div>
            <Aheader />
            <Aheros title="Event Add" name="Event Add" />
            <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="p-5 bg-light rounded contact-form">
                        <div className="row g-4">
                            <div className="col-12">

                                <h1 className="display-5 mb-0 text-center">Events Form</h1>
                            </div>
                            <div className="col-md-6 mx-auto col-lg-7">

                                <form onSubmit={EventSubmit}>
                                    <input name='img' onChange={getchange} type="file" className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Your Name" />
                                    <select value={form.category} name='category' onChange={getchange} className="form-select border-primary w-100 p-3 mb-4" aria-label="Default select example">
                                        <option disabled>Select category</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Corporate">Corporate</option>
                                        <option value="Buffet">Buffet</option>
                                        <option value="Cocktail">Cocktail</option>
                                    </select>
                                    <button className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">Submit Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventAdd
