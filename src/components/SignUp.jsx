import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [data,setData]=useState(
        {
            "name":"",
            "dob":"",
            "email":"",
            "gender":"",
            "pass":"",
            "conpass":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        if(data.pass==data.conpass)
            {
                alert("Password and confirm password are same")
                console.log(data)
                axios.post("http://localhost:8080/signup",data).then(
                    (response)=>{
                        console.log(response.data)
                        if(response.data.status=="success")
                            {
                                sessionStorage.setItem("token",response.data.token)
                                sessionStorage.setItem("userid",response.data.userid)
                                navigate("/")
                            }
                        else{
                            alert("Error")
                        }
                    }
                ).catch(
                    (error)=>{
                        console.log(error.message)
                    }
                ).finally()
            }
        else{
            alert("error in password")
        }
    }
    let navigate=useNavigate()
    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date Of Birth</label>
                            <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gender</label>
                            <input type="text" className="form-control" name='gender' value={data.gender}  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" id="" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="pass" id="" className="form-control" value={data.pass} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" name="conpass" id="" className="form-control" value={data.conpass} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <center><button className="btn btn-success" onClick={readValue}>SIGNUP</button></center><button className="btn btn-success" onClick={readValue}>SIGNUP</button>
                        </div>
                        <div>
                        <center><Link class="new user" to="/">Login</Link></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp