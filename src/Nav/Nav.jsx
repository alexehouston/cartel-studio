import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';

export default function Nav() {
    return (
        <div className="Nav container-fluid p-5 d-flex justify-content-between align-items-center">
            <img className="logo" src="/assets/logo.png" />
            <ul className="d-flex align-items-center mb-0">
                <li className="nav-links mx-4 text-center text-uppercase">
                    Services
                </li>
                <li className="nav-links mx-4 text-center text-uppercase">
                    About
                </li>
                <li className="nav-links mx-4 text-center text-uppercase">
                    Contact
                </li>
                <li className="nav-links mx-4 text-center text-uppercase">
                    Book Online <FontAwesomeIcon icon={faChevronRight} />
                </li>
            </ul>
        </div>
    )
}