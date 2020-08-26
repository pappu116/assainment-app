import React from 'react';
import './Header.css'
import Course from '../Course/Course';

const Header = () => {
    return (
        <div  className="header">
             <div className="col-md-12">
             <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-primary" href="/Navbar">Programming-Hero</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="/Home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-success" href="/Course">Course</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-success" href="/Pricing">Pricing</a>
                    </li>
                   
                    </ul>
                </div>
                </nav>
             </div>
             <Course></Course>
            </div>
    );
};

export default Header;