import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateUserMutation } from '../Slice/userApi'

function UserData() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        gender: ""
    })

    const getchnage = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const [createuser, { isLoading, isSuccess, error }] = useCreateUserMutation();

    const getSubmit = (e) => {
        e.preventDefault();

        try {
            createuser(form); // send data

            alert("User Added ✅");

            // reset form
            setform({
                name: "",
                email: "",
                gender: "",
                password: "",
            });
            redirect("/")

        } catch (err) {
            console.log(err);
        }
    };



    return (
        <div>
            <div className="container">
                <div className="col-md-6 mx-auto">
                    <h1>User Add Form</h1>
                    <form onSubmit={getSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Enter your Name</label>
                            <input type="text" name='name' onChange={getchnage} value={form.name} className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email' onChange={getchnage} value={form.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label'>Select Gender</label>
                            <input type="radio" name='gender' onChange={getchnage} value="male" class="form-check-input" /> Male
                            <input type="radio" name='gender' onChange={getchnage} value="female" class="form-check-input" /> Female
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' onChange={getchnage} value={form.password} className="form-control" id="exampleInputPassword1" />
                        </div>


                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default UserData
