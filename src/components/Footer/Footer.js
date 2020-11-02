import React from 'react';
import { Link } from 'react-router-dom';
import './footer.style.css'

const Footer = () => {
    return (
        <footer className="container py-3">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <Link to="/privacy">Privacy Policy</Link> <span className="px-4" style={{color: '#ffffff'}}>|</span>
                    <Link to="/terms">Terms Of Service</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
