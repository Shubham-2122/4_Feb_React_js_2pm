import React, { useEffect } from 'react'
import { useDeleteUserMutation, useGetUsersQuery } from '../Slice/userApi'
// import { useDispatch, useSelector } from 'react-redux'
// import { readuser } from '../Slice/userSlice'

function UserGet() {

    const {data:users = [],error, isLoading} =  useGetUsersQuery();
    console.log(isLoading)

    const [deleteUser] = useDeleteUserMutation()

    return (
        <div>

            <div className="container">
                <h1>hello this User Table show</h1>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">gender</th>
                            <th scope='col'>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((data,index) => {
                                return (
                                    <tr className='text-center' key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.gender}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' onClick={()=>deleteUser(data.id)}>Delete</button>
                                        </td>
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

export default UserGet
