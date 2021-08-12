import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <section>
      <div className="footer">
        <div className="footer-container">
          <div className="container-fluid linkContent">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-0">
                <Link className="link" to="/">Shahzod</Link>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-0">
                <Link className="link" to="/about">About us</Link>
                <ul className="navs pl-0">
                  <li className="nav-item "><a className="nav-link pl-0"  target="_blank" href="https://t.me/shaxa5911">Support</a></li>
                  <li className="nav-item "><Link className="nav-link pl-0" to="/about">About me</Link></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-0">
                <Link className="link" to="/contact">Help</Link>
                <ul className="navs pl-0">
                  <li className="nav-item "><a className="nav-link pl-0" target="_blank" href="https://t.me/baxtiyor9703">Site Owner</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-0">
                <Link className="link" to="/contact">Contact</Link>
                <ul className="navs pl-0">
                  <li className="nav-item "><a className="nav-link pl-0" target="_blank" href="tel:998 99 852 59 11">Phone number: 99 852-59-11</a></li>
                  <li className="nav-item "><a className="nav-link pl-0" href="https://shaxa5911@gmail.com">Email: shaxa5911@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="social-media">
              <a href="https://t.me/shahagroup" className="social-link"><FaTelegram /></a>
              <a href="https://instagram.com/sh_ashuroff" className="social-link"><FaInstagram /></a>
              <a href="https://facebook.com/shahzod.ashurov.5911" className="social-link"><FaFacebook /></a>
            </div>
          </div>
          <div className="author">
            Created site Baxtiyor
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Footer;