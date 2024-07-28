import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/viewall",{},{
            headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}}).then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
            }
        ).finally()

    }
    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value,index)=>{
                                  return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                  <div class="card mb-3">
                                      <div class="row g-0">
                                          <div class="col-md-4">
                                              <img src="https://smashballoon.com/wp-content/uploads/2020/04/types-of-instagram-posts-624x297.jpg" class="img-fluid rounded-start" alt="..."/>
                                          </div>
                                          <div class="col-md-8">
                                              <div class="card-body">
                                                  <h5 class="card-title">{value.Message}</h5>
                                                  
                                                  <p class="card-text"><small class="text-body-secondary">POSTED ON:{value.postedDate}</small></p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
  
                              </div>
  
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll