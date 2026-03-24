import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Aheros from '../Acoman/Aheros'
import axios from 'axios'

function EventManage() {

    const [events, setevents] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            setloading(true)
            const res = await axios.get("https://returent-backend.onrender.com/api/events")
            // console.log(res.data.data)
            setevents(res.data.data)
        } catch (error) {
            console.log("api data not Found", error)
        }
        finally {
            setloading(false)
        }
    }

    const [single, setsingle] = useState({
        _id: "",
        image: "",
        category: ""
    })

    const singelproduct = async (id) => {
        try {
            const res = await axios.get(`https://returent-backend.onrender.com/api/events/${id}`)
            console.log(res.data.data)
            setsingle(res.data.data)
        } catch (error) {
            console.log("Api data not Found", error)
        }
    }

    const deleteproduct = async (id) => {
        try {
            const res = await axios.delete(`https://returent-backend.onrender.com/api/events/${id}`)
            console.log(res.data)
            fetchdata()
        } catch (error) {
            console.log("Api data not Found", error)
        }
    }

    // model open data 
    const [edit, setedit] = useState(null)
    const [editetd, setedited] = useState({
        _id: "",
        img: "",
        category: ""
    })

    const openmodel = (data) => {
        console.log(data)
        setedit(data)
        setedited({
            _id: data._id,
            category: data.category,
            img: data.img   // existing image URL
        })
    }

    const getchange = (e) => {
        if (e.target.name === "img") {
            setedited({
                ...editetd,
                img: e.target.files[0]
            });
        } else {
            setedited({
                ...editetd,
                [e.target.name]: e.target.value
            });
        }

        console.log(editetd)
    }

    const updateproduct = async (e) => {
        e.preventDefault()

        try {
            setloading(true)
            const formData = new FormData()

            formData.append("category", editetd.category)

            // send image only if new file selected
            if (editetd.img instanceof File) {
                formData.append("img", editetd.img)
            }

            const res = await axios.put(
                `https://returent-backend.onrender.com/api/events/${editetd._id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )

            console.log(res.data)

            fetchdata()
            setedit(null)

        } catch (error) {
            console.log("Update failed", error)
        }
        finally{
            setloading(false)
        }
    }

    return (
        <div>
            <Aheader />
            <Aheros title="Events Manage" name="Evenet Manage" />
            <div className="container">
                <div className='wow bounceInUp' data-wow-delay="0.1s">
                    <h1 className='text-center'>Hello This Events manage</h1>
                    <table className="table "  >
                        <thead>
                            <tr className='table-dark text-center'>
                                <th scope="col">#id</th>
                                <th scope="col">Iamges</th>
                                <th scope="col">category</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? (
                                    <tr>
                                        <td colSpan="4" className="text-center">
                                            <h4>Loading data...</h4>
                                        </td>
                                    </tr>
                                ) : events.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center">
                                            <h4>No Data Found</h4>
                                        </td>
                                    </tr>
                                ) : (
                                    events.map((data) => (
                                        <tr key={data._id} className='text-center'>
                                            <th>{data._id}</th>
                                            <td>
                                                <img src={data.img} style={{ width: "100px", borderRadius: "10px" }} alt="" />
                                            </td>
                                            <td>{data.category}</td>
                                            <td>
                                                <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => singelproduct(data._id)}>View</button>
                                                <button className='btn btn-success mx-2' onClick={() => openmodel(data)}>Edit</button>
                                                <button className='btn btn-danger' onClick={() => deleteproduct(data._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </table>
                </div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Event {single.category}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div key={single._id} className="col-12  ">
                                    <div className="event-img position-relative">
                                        <img className="img-fluid rounded w-100" style={{ width: "400px", height: "300px" }} src={single.img} alt="" />

                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    edit && (
                        <div className="container">
                            <div className="p-5 bg-light rounded contact-form">
                                <div className="row g-4">
                                    <div className="col-12">

                                        <h1 className="display-5 mb-0 text-center">Events Form Update</h1>
                                    </div>
                                    <div className="col-md-6 mx-auto col-lg-7">

                                        <form >
                                            <input name='img' type="file" onChange={getchange} className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Your Name" />
                                            <select name='category' onChange={getchange} value={editetd.category} className="form-select border-primary w-100 p-3 mb-4" aria-label="Default select example">
                                                <option disabled>Select category</option>
                                                <option value="Wedding">Wedding</option>
                                                <option value="Corporate">Corporate</option>
                                                <option value="Buffet">Buffet</option>
                                                <option value="Cocktail">Cocktail</option>
                                            </select>
                                            <div className="row">
                                                <div className="col-6">
                                                    <button onClick={updateproduct} className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">Update Data</button>
                                                </div>
                                                <div className="col-6">
                                                    <button onClick={() => setedit(null)} className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">cancle Data</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }



            </div>
        </div>
    )
}

export default EventManage
