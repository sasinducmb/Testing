import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { RxTwitterLogo } from 'react-icons/rx';
import { IoLogoInstagram } from 'react-icons/io';
import { RxLinkedinLogo } from 'react-icons/rx';
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div class="container text-left pt-5">
          <div class="row">
            <div class="col-12 col-md-3 col-lg-4">
              <img src="../../img/image 1.png"></img>
            </div>
            <div class="col-12 col-md-3 col-lg-2">
              <p className="">HOME</p>
              <p className="">CONTACT</p>
              <p className="">SHOP</p>
              <p className="">ABOUT</p>

              <h6 className="pt-5 pb-3" style={{ letterSpacing: '2px' }}>
                {' '}
                FOLLOW US
              </h6>
              <div className="d-flex">
                <FaFacebookSquare size={30} className="footer-img" />
                <IoLogoInstagram size={30} className="footer-img mx-2" />
                <RxLinkedinLogo size={30} className="footer-img mx-2 mb-4" />
                <RxTwitterLogo size={30} className="footer-img mx-2" />
              </div>
            </div>
            <div class="col-12 col-md-2 col-lg-2">
              <a href="/policy">
                <p
                  className=""
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  REFUND POLICIES
                </p>
              </a>
              <p className="">TERMS & CONDITIONS</p>
              <p className="">PRIVACY POLICY</p>
              <p className="">HELP CENTER</p>
            </div>
            <div class="col-12 col-md-2 col-lg-4">
              <h6
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 300,
                  fontSize: '20px',
                }}
              >
                Contact US
              </h6>

              <p className=""> +00 98 799 799</p>
              <p className="pb-5">INFO@JUSTSTRUCTURAL.COM</p>

              <h6 className="pt-5"> GET IN TOUCH WITH US</h6>
              <div className="d-flex mt-3">
                <div class="form-group sm-3">
                  <input
                    type="text"
                    class="email"
                    id="inputemail"
                    placeholder="Enter your Email"
                    style={{
                      height: '40px',
                      border:'1px solid white'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  class="btn"
                  style={{ backgroundColor: '#9AC95C',borderRadius:'0px' }}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
