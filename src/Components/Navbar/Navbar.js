import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg nav-bg sticky-top t-0 navbar-style shadow-sm">
                <div class="container-fluid mx-5">
                    <h3 className="fw-bold">ATools<strong className="text-warning fw-bold">.</strong></h3>
                    <button class="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item  fw-bold">
                                <a class="nav-link text-dark" href="#startFree"><button className="start-btn">Start Free Trial</button></a>
                            </li>
                            <li class="nav-item   fw-bold">
                                <a class="nav-link text-dark" href="#login"><button className="login-btn">Login</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;