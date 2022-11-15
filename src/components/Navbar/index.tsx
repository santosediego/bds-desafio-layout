import React from 'react';
import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-md navbar-dark main-nav'>
            <div className='container-fluid'>
                <Link to={'/'}>
                    <h4>Carros Top</h4>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#carros-top-navbar"
                    aria-controls="carros-top-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className='collapse navbar-collapse' id='carros-top-navbar'>
                    <ul className='navbar-nav offset-md-9 main-menu'>
                        <li>
                            <NavLink to="/" activeClassName="active" exact>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog" activeClassName="active">
                                Catálogo
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
