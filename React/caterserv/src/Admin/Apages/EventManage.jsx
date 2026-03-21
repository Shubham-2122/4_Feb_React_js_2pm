import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Aheros from '../Acoman/Aheros'
import axios from 'axios'

function EventManage() {

    const [events, setevents] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("https://returent-backend.onrender.com/api/events")
            // console.log(res.data.data)
            setevents(res.data.data)
        } catch (error) {
            console.log("api data not Found", error)
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
                                events && events.map((data, index) => {
                                    return (
                                        <tr key={data._id} className='text-center'>
                                            <th scope="row">{data._id}</th>
                                            <td>
                                                <img src={data.img} style={{ width: "100px", borderRadius: "10px" }} alt="" />
                                            </td>
                                            <td>{data.category}</td>
                                            <td>
                                                <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => singelproduct(data._id)}>View</button>
                                                <button className='btn btn-success mx-2'>Edit</button>
                                                <button className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
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


            </div>
        </div>
    )
}

export default EventManage
