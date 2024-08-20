"use client";

import React from 'react';
import FeaturesSection from '../features.jsx';
import Users from '../usersEx.jsx';
import Subscribe from '../subscribe.jsx';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="p-8 flex relative" style={{ backgroundColor: '#F5F5F5', padding: '20px'}}>
        <div style={{ marginTop: '50px'}}>
          <div>
          <h1 className='font-bold leading-extra-loose ' style={{ fontSize: '40px', marginLeft: '50px', marginTop: "100px"}}>
            Empower Your Business with<br />Stunning Websites</h1>
            </div>
            <div>
          <p style={{ fontSize: '24px', marginLeft: '50px', marginTop: '50px' }} className='font-normal leading-extra-loose'>
            Create, Customize, and Launch Your Website with <br />Our Easy-to-Use Design Tool</p>
            </div>
          <Link href="/buil">
            <button className="bg-customBlue hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold"
              style={{ width: '222px', height: '65px', fontSize: '24px', marginTop: '50px', marginLeft: '200px' }}>
              Get started
            </button>
          </Link>
        </div>
        <div>
        <div className="bg-blue-500 z-10" style={{ marginLeft: '100px', marginTop: "70px", width: "700px", height: "600px" }}>
          <img src='/assets/agen.jpg' className="w-full h-full object-cover" alt='Description of the image' />
        </div>
        </div>
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <Users />
      </section>
      <section>
        <Subscribe />
      </section>
    </div>
  );
};

export default HomePage;
