import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';

export default function Nav({ setCurrentPage }) {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isMobile ? (
                <nav className="Nav navbar navbar-dark">
                    <div className="container-fluid">
                        <img onClick={() => setCurrentPage('home')} className="logo navbar-brand" src="/assets/logo.png" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-top text-bg-dark vw-100" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">.CARTEL Studio</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="d-flex flex-column align-items-center p-0">
                                    <li onClick={() => setCurrentPage('services')} className="nav-links my-1 text-center text-uppercase">
                                        Services
                                    </li>
                                    <li onClick={() => setCurrentPage('about')} className="nav-links my-1 text-center text-uppercase">
                                        About
                                    </li>
                                    <li onClick={() => setCurrentPage('contact')} className="nav-links my-1 text-center text-uppercase">
                                        Contact
                                    </li>
                                    <li className="nav-links my-1 text-center text-uppercase">
                                        Book Online <FontAwesomeIcon icon={faChevronRight} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            ) : (
                <div className="Nav container-fluid p-5 d-flex justify-content-between align-items-center">
                    <img onClick={() => setCurrentPage('home')} className="logo" src="/assets/logo.png" />
                    <ul className="d-flex align-items-center mb-0">
                        <li onClick={() => setCurrentPage('services')} className="nav-links mx-4 text-center text-uppercase">
                            Services
                        </li>
                        <li onClick={() => setCurrentPage('about')} className="nav-links mx-4 text-center text-uppercase">
                            About
                        </li>
                        <li onClick={() => setCurrentPage('contact')} className="nav-links mx-4 text-center text-uppercase">
                            Contact
                        </li>
                        <li className="nav-links mx-4 text-center text-uppercase">
                            Book Online <FontAwesomeIcon icon={faChevronRight} />
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

Nav.propTypes = {
    setCurrentPage: PropTypes.func.isRequired
};