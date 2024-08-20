import React from 'react';
import HomePage from '../../acceuil/acceuil/page';
import About from '../../about/aboutUs';
import Progress from '../../progress.tsx/progress';
import Contact from '../../contact/contact';
import Footer from '../../footer/footer';

const Navbar: React.FC = () => {
    return(
        <div style={{backgroundColor:'#F5F5F5'}}>
            <div className='flex items-center' style={{backgroundColor:'#003366', height:'100px'}}>
            <h1 className='font-semibold' style={{fontSize:'36px', color:'white', marginLeft:'100px'}}>Hello world</h1>
            </div>
            <HomePage />
            <About />
            <Progress />
            <Contact />
            <Footer />
        </div>
    );
};

export default Navbar;