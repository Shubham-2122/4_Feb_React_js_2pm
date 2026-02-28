import React, { useEffect, useState } from 'react'

function UserEffect() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // console.log(data)
                setuser(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    return (
        <div>
            <h1>Hello this user Data</h1>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                            <th scope="col">city</th>
                            <th scope="col">Compnay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user && user.map((data,index) => {
                                // console.log(data)
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.address.city}</td>
                                        <td>{data.company.name}</td>
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

export default UserEffect
