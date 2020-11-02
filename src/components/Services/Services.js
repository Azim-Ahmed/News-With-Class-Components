import React from 'react'
import { services } from '../data/data';
import './service.style.css';

const Services = () => {
    return (
        <section className="container service-section">
            <h5 className="service-title py-4">World's First Free Telegram-Based Matrimony Service</h5>
            <div className="row mt-4 justify-content-center">
                {
                    services.map(service =>{
                        return <div key={service.id} className="col-lg-4 col-md-6 col-sm-10 col-12 mb-5">
                            <div className="service-box">
                            <img src={service.img} alt={service.service} className="img-fluid service-img"/>
                            <div className="title pt-3">
                                <p className="service-sub">{service.service}</p>
                            </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="row mt-4">
                <div className="col-12 contact">
                    <p className="subheading">Use one of the following methods to send us your bio-data:</p>
                    <ol className="ordered">
                        <li className="contact-list">Send on Telegram app to +91 89284 03347</li>
                        <li className="contact-list">Send on WhatsApp to +91 89284 03347</li>
                        <li className="contact-list">Send on email to support@wouldbee.com</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Services
