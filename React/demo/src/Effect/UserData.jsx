import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserData() {

    const [user, setuser] = useState()

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/users")
            console.log(res.data)
            setuser(res.data)
        } catch (error) {
            console.log("api data not found", error)
        }
    }

    return (
        <div>
            <h1>Hello user data</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope='col'>LastName</th>
                            <th scope="col">email</th>
                            <th scope="col">city</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            user && user.map((data, index) => {
                                // console.log(data)
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name.firstname}</td>
                                        <td>{data.name.lastname}</td>
                                        <td>{data.email}</td>
                                        <td>{data.address.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default UserData
