import React from 'react';
import {Link} from 'react-router-dom';
const About = () => {
  return (
    <>
    <section>
      <div className="about">
        <div className="about-container">
          <div className="title">
          <h4>I am Shahzod Ashurov</h4>
          <h1>Creative designer</h1>
          <button type="button" className="btn"><Link to="/contact">Contact Me</Link></button>
          </div>
          <div className="title-about">
            <h3>Expert Web developer & Designer</h3>
            <h1>About Me</h1>
            <p>
            I am Ashurov Shahzod, I make logos, contact me if you need a logo.
            Thank you for your attention
            </p>
            <button type="button" className="btn">Download Cv</button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;