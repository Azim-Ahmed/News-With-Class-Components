import React from 'react'
import logo from '../../images/logo.png'
import './hero.style.css'

const HEro = () => {
    return (
        <div className="hero-section">
            <div className="logo text-center">
                <img src={logo} alt="logo" className="img-fluid logo-img"/>
                <p>Best Free Matrimony Service</p>
            </div>
        </div>
    )
}

export default HEro
