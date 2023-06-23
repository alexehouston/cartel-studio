import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok, faYelp } from '@fortawesome/free-brands-svg-icons'
import './Footer.css';

export default function Footer() {
    return (
        <div className="Footer container-fluid position-absolute bottom-0 text-center">
            <div className="row mx-auto col-10 mb-4">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="col-3 social-links d-flex justify-content-center">
                        <li className="px-4"><FontAwesomeIcon icon={faInstagram} /></li>
                        <li className="px-4"><FontAwesomeIcon icon={faFacebook} /></li>
                        <li className="px-4"><FontAwesomeIcon icon={faTiktok} /></li>
                        <li className="px-4"><FontAwesomeIcon icon={faYelp} /></li>
                    </div>
                    <div className="col-6 footer-links d-flex justify-content-center align-items-center">
                        <li className="px-4">Accessibility</li>
                        <li className="px-4">Terms & Conditions</li>
                        <li className="px-4">Cancellation Policy</li>
                        <li className="px-4">Return Policy</li>
                        <li className="px-4">Partner With Us</li>
                    </div>
                    <p className="footer-address col-3 m-0">87 Crosby St, Lower Level, New York, NY, 10012</p>
                </div>
            </div>
            <p className="copyright text-uppercase m-1">© 2023 .CARTEL Hair Studio</p>
        </div>
    )
}