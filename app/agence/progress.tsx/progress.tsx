import React from "react";
import './prog.css'

const Progress:React.FC = () => {
    return(
        <main className="containerr">
      <div className="cont">
      <div style={{width:'40%', marginTop:'100px'}}>
            <div className="proimage">
            </div>
            </div>
            <div style={{marginTop:'100px', marginLeft:'300px'}}>
              <h1 className="font-semibold" style={{color:'white', fontSize:'36px'}}>Our Process</h1>
              <div style={{display:'flex', marginTop:'45px'}}>
                <div className="number">
                <div className="line"></div>
                  <h1 className="font-bold" style={{fontSize:'32'}}>1</h1>
                </div>
                <div style={{marginLeft:'16px'}}>
                  <h1 className="font-semibold" style={{fontSize:'24px', color:'white'}}>Consultation</h1>
                  <p style={{fontSize:'20', color:'white'}} className="font-normal">We start with a consultation to understand your <br/>
business needs and goals</p>
                </div>
              </div>
              <div style={{display:'flex', marginTop:'45px'}}>
                <div className="number">
                <div className="line"></div>
                  <h1 className="font-bold" style={{fontSize:'32'}}>2</h1>
                </div>
                <div style={{marginLeft:'16px'}}>
                  <h1 className="font-semibold" style={{fontSize:'24px', color:'white'}}>Design and Development</h1>
                  <p style={{fontSize:'20', color:'white'}} className="font-normal">Our team designs and develops your website <br/>
using our powerful tools</p>
                </div>
              </div>
              <div style={{display:'flex', marginTop:'45px'}}>
                <div className="number">
                  <h1 className="font-bold" style={{fontSize:'32'}}>3</h1>
                </div>
                <div style={{marginLeft:'16px'}}>
                  <h1 className="font-semibold" style={{fontSize:'24px', color:'white'}}>Launch and Support</h1>
                  <p style={{fontSize:'20', color:'white'}} className="font-normal">We help you launch your website and provide <br/>
ongoing support to ensure your success</p>
                </div>
              </div>
              <button className="bg-customBlue hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold" 
        style={{ width: '222px', height: '65px', fontSize: '24px',marginTop:'50px', marginLeft:'200px' }}>
        Contact Us
  </button>
            </div>
      </div>
    </main>
    );
};

export default Progress;