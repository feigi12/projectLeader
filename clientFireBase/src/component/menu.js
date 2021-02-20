import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';


export default function Menu() {

    return (
        <div >
          
            <nav className="navbar navbar-expand-lg text-dark" style={{ fontSize: '40px',backgroundColor:'rgb(25, 25, 112)' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span style={{color:'white'}} className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active ml-5 mt-3">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                
                        <li className="nav-item ml-5 mt-3">
                            <Link className="nav-link" to="/allPost">AllPost </Link>
                        </li>
                        <li className="nav-item ml-5 mt-3">
                            <Link className="nav-link" to="/myPost">MyPost </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
