import React from "react";
import './contact.css'

const Contact:React.FC = () => {
    return(
        <main style={{height:'900px'}}>
      <h1 className="contact-title" style={{textAlign:'center'}}>Get in Touch</h1>
      <div style={{display:'flex', alignItems: 'center'}}>
        <div style={{width:'50%'}}>
            <div className="info">
                <h1 className="font-semibold" style={{textAlign:'center', color:'white', fontSize:'36px', paddingTop: '20px'}}>Contact us</h1>
                <div>
                <div style={{display:'flex', marginTop:'50px',marginLeft:'50px', alignItems: 'center'}}>
                    <img src="/assets/icons/Address.png" />
                    <p className="par" style={{fontSize:'24', marginLeft:'38px'}}>Oujda, Morocco</p>
                </div>
                <div style={{display:'flex', marginTop:'100px',marginLeft:'50px', alignItems: 'center'}}>
                    <img src="/assets/icons/Email.png" />
                    <p className="par" style={{fontSize:'24', marginLeft:'38px'}}>zakariyaederfoufi@gmail.com</p>
                </div>
                <div style={{display:'flex', marginTop:'100px',marginLeft:'50px', alignItems: 'center'}}>
                    <img src="/assets/icons/Phone.png" />
                    <p className="par" style={{fontSize:'24', marginLeft:'38px'}}>000000000</p>
                </div>
                </div>
                <div style={{display:'flex', marginTop:'83px', gap:'70px', justifyContent: 'center'}}>
                <img src="/assets/icons/Facebook.png" />
                <img src="/assets/icons/Instagram.png" />
                <img src="/assets/icons/Twitter.png" />
                <img src="/assets/icons/Linkedin.png" />
                </div>
            </div>
        </div>
        <div style={{width:'50%'}}>
        <form className='contactForm' >
      <div className='formGroup'>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className='formGroup'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className='formGroup'>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          
          required
        />
      </div>
      <div className='formGroup'>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          
          required
        />
      </div>
      <button type="submit" className='submitButton'>Send</button>
    </form>
        </div>
      </div>
    </main>
    );
};

export default Contact;