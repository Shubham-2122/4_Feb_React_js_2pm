import React, { useState } from 'react'

function FormData() {

    const [name, setname] = useState("")
    const [surname, setsurname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input value={name} onChange={(e)=>setname(e.target.value)} type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="surname" className="form-label">SurName</label>
                                <input value={surname} onChange={(e)=>setsurname(e.target.value)} type="text" className="form-control" id="surname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input value={email}  onChange={(e)=>setemail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input value={phone}  onChange={(e)=>setphone(e.target.value)} type="tel" className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input value={password}  onChange={(e)=>setpassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FormData
