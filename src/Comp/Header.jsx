import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Cat from '../Pages/Cat';
import Home from '../Pages/Home';
import catData from '../data/Data';
import Single from '../Pages/Single';

function Header() {
    return (
        <>
            <header className='py-3'>
                <div className="row">

                    <div className="col-lg-6">
                        {/* <img src={require('../assets/logo.png')}/> */}
                        <img src="https://www.nepalitimes.com/img/logo.png" />
                    </div>

                    <div className="col-lg-6 text-end fs-3">
                        <div>
                            <i className="bi bi-facebook me-3" />
                            <i className="bi bi-twitter me-3" />
                            <i className="bi bi-youtube me-3" />
                            <i className="bi bi-instagram" />
                        </div>

                    </div>

                </div>
            </header>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            {catData.map((a)=>(
                                <li className="nav-item" key={a.id}>
                                <Link className="nav-link fw-bold" to={`/cat/${a.id}`}>{a.catName}</Link>
                            </li>
                            ))}
                            

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cat/:cid" element={<Cat />} />
                <Route path="/details/:id" element={<Single />} />
            </Routes>

        </>
    )
}

export default Header
