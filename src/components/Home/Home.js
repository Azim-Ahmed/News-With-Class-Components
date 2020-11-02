import React from 'react'
import Footer from '../Footer/Footer'
import HEro from '../Hero/HEro'
import Services from '../Services/Services';
import '../Footer/footer.style.css'

const Home = () => {
    return (
        <div>
            <header>
                <HEro />
            </header>
            <Services />
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home
