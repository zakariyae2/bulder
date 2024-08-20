import React from "react";
import './abb.css'
import Values from "./values";

const About:React.FC = () => {
    return(
        <main className="backAbb">
            <section>
        <h2 className="about-title">About Our Agency</h2>
        <div>
        <p style={{textAlign:'center'}} className="leading-about-loose">Founded in [Year], [Agency Name] was created with the vision of empowering businesses to <br/>
establish their online presence with ease. Our mission is to provide user-friendly tools <br/>
and expert services that make website creation accessible to everyone.</p>
        </div>
        <div style={{display:'flex', alignItems: 'center', marginTop:'80px'}}>
            <div style={{width:'30%'}}>
            <div className="abimage">
            </div>
            </div>
            <div style={{marginLeft:'300px'}}>
            <p className="leading-about-loose2">With a team of experienced web designers, developers, and digital<br/>
                marketing specialists, we are committed to helping our clients <br/>
                succeed in the digital world. Whether you’re a small business <br/>
                owner or a large enterprise, we have the solutions you need to <br/>
                build, grow, and maintain a successful online presence.</p>
                </div>
        </div>
        </section>
        <section>
            <Values/>
        </section>
        </main>
    );
};

export default About;