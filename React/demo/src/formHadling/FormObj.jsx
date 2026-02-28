import React, { useState } from 'react'

function FormObj() {

    const [form,setform] = useState({
        name:"",
        surname:"",
        phone:"",
        password:"",
        email:""
    })

    const getChange=(e)=>{
        setform({
            ...form,
            // name == value
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

  return (
    <div>
        <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        {/* <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="surname" className="form-label">SurName</label>
                                <input value={form.surname}  onChange={(e)=>setform({...form,surname:e.target.value})} type="text" className="form-control" id="surname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input value={form.email} onChange={(e)=>setform({...form,email:e.target.value})}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input value={form.phone} onChange={(e)=>setform({...form,phone:e.target.value})} type="tel" className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input value={form.password} onChange={(e)=>setform({...form,password:e.target.value})} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form> */}

                          <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input value={form.name} name='name' onChange={getChange} type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="surname" className="form-label">SurName</label>
                                <input value={form.surname} name='surname' onChange={getChange} type="text" className="form-control" id="surname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input value={form.email} name='email'  onChange={getChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input value={form.phone} name='phone' onChange={getChange} type="tel" className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input value={form.password} name='password' onChange={getChange} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FormObj
