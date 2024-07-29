import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate()

    const LogOut=()=>{
        sessionStorage.clear()
        navigate("/")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">BLOG APP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/add">CREATE POST</a>
                            <a class="nav-link" href="/viewall">VIEW ALL</a>
                            <a class="nav-link" href="/viewmypost">VIEW MY POST</a>
                           <button className="btn btn-success" onClick={LogOut}>LOGOUT</button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar