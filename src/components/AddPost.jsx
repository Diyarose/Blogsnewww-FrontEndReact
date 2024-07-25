import axios from 'axios'
import React, { useState } from 'react'

const AddPost = () => {
  
    const [data,setData]=useState(
        {
            "Message":"",
            "userId":sessionStorage.getItem("userId")
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        
                console.log(data)
                axios.post("http://localhost:8080/add",data,{
                    headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
                }).then(
                    (response)=>{
                        console.log(data)
                        if(response.data.status=="success")
                            {
                                alert("Successfully added")
                            }
                        else{
                            alert("Error")
                        }
                    }
                ).catch(
                    (error)=>{
                        console.log(error)
                    }
                ).finally()
            
       
    }

  return (
    <div>
        <div className="container">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Post A Message</label>
                        <textarea id="" className="form-control" name='Message' value={data.Message} onChange={inputHandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>POST</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost