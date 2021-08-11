import React from 'react';
import Slider from "react-slick";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <section className="home">
    <div className="home-container">
        <div className="layer">
        <Slider {...settings}>
          <div className='content contentOne'>
          <h1>Welcome to my Web site</h1>
          <p>Assalomu Alaykum mening saytimga xush kelibsiz !!!</p>
          </div>
          <div className="content contentTwo">
          <h1>Welcome to my Web site</h1>
          <p>Assalomu Alaykum mening saytimga xush kelibsiz !!!</p>
          </div>
          
        </Slider>
        </div>
    </div>
    </section>
    </>
  );
};

export default Home;