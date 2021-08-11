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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sequi sapiente sit! Distinctio a quam iure reiciendis vero commodi doloribus facere nisi ex quisquam error labore, quis, dolorum quia aspernatur unde dolores praesentium consequuntur magni! Ab dolorem facilis temporibus! Maiores?
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