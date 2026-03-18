import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Aheros from '../Acoman/Aheros'
import axios from 'axios'

function ServiceMange() {


    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("https://returent-backend.onrender.com/api/services")
            // console.log(res.data.data)   
            setservice(res.data.data)
        } catch (error) {
            console.log("Api data not Found", error)
        }
    }

    return (
        <div>
            <Aheader />
            <Aheros title="Service Manage" name="Service Manage" />

            <div className="container">
                <div className='wow bounceInUp' data-wow-delay="0.1s">
                    <h1 className='text-center'>Hello This Service manage</h1>
                    <table className="table "  >
                        <thead>
                            <tr className='table-dark text-center'>
                                <th scope="col">#id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Icons</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                service && service.map((data, index) => {
                                    return (
                                        <tr key={data._id} className='text-center'>
                                            <th scope="row">{data._id}</th>
                                            <td>{data.title}</td>
                                            <td className={`${data.icon} fs-1`}></td>
                                            <td>
                                                <button className='btn btn-info'>View</button>
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

            </div>
        </div>
    )
}

export default ServiceMange
