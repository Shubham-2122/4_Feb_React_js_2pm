import React from 'react'
import useFetch from './Hooks/useFetch'

function UserApi() {

    const { data } = useFetch("https://jsonplaceholder.typicode.com/users")
    console.log(data)
    return (
        <div className='p-10'>
            <table className='border-2'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((user, index) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserApi
