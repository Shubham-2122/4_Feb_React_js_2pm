import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Aheros from '../Acoman/Aheros'
import axios from 'axios'

function EventManage() {

    const [events,setevents] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        try {
            const res = await axios.get("https://returent-backend.onrender.com/api/events")
            // console.log(res.data.data)
            setevents(res.data.data)
        } catch (error) {   
            console.log("api data not Found",error)
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
                             events && events.map((data,index)=>{
                                return (
                                     <tr key={data._id} className='text-center'>
                                            <th scope="row">{data._id}</th>
                                            <td>
                                                <img src={data.img} style={{width:"100px",borderRadius:"10px"}} alt="" />
                                            </td>
                                            <td>{data.category}</td>
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

export default EventManage
