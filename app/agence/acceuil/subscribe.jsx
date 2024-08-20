import React from 'react';
import './subs.css';

const Subscribe = () => {
    return (
        <main style={{height:'300px'}} className='col'>
            <h2 className="sub-title">Ready to Create Your Website?</h2>
        <div className="subss">
            <p className='font-medium'>Sign up today and start building your dream website!</p>
            <div style={{width:'20%'}}>
            <button className="bg-customBlue hover:bg-blue-600 text-white rounded font-semibold" 
            style={{ width: '222px', height: '65px', fontSize: '24px',marginLeft:'150px' }}>
            Get started
            </button>
            </div>
        </div>
        </main>
    );
  };

export default Subscribe;