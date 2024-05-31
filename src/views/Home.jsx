import React from 'react';
import Card from '../components/Card';
import { FiArrowLeft } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';
import Cardcomment from '../components/Cardcomment';
import { Carousel } from 'bootstrap';
import Carousel1 from '../components/Carousel1';

const Home = () => {
  return (
    <div className="container">
      <div>
        <div className="row">
          {/* <!-- Slider main container Start --> */}
          <div class="home1-slider swiper-container">
            <div class="swiper-wrapper">
              <div
                class="home1-slide-item swiper-slide"
                data-swiper-autoplay="5000"
                data-bg-image="images/slider/home1/Rectangle 39.png"
              >
                <div class="home1-slide1-content">
                  <span class="bg"></span>
                  <span class="slide-border"></span>
                  <span class="icon">
                    <img
                      src="images/slider/home1/Rectangle 39.png"
                      alt="Slide Icon"
                    />
                  </span>
                  <h2 class="title">Handicraft Shop</h2>
                  <h3 class="sub-title">Just for you</h3>
                  <div class="link">
                    <a href="shop.html">shop now</a>
                  </div>
                </div>
              </div>
              <div
                class="home1-slide-item swiper-slide"
                data-swiper-autoplay="5000"
                data-bg-image="images/slider/home1/Rectangle 39.png"
              >
                <div class="home1-slide2-content">
                  <span
                    class="bg"
                    data-bg-image="images/slider/home1/Rectangle 39.png"
                  ></span>
                  <span class="slide-border"></span>
                  <span class="icon">
                    <img
                      src="images/slider/home1/Rectangle 39.png"
                      alt="Slide Icon"
                    />
                    <img
                      src="images/slider/home1/Rectangle 39.png"
                      alt="Slide Icon"
                    />
                  </span>
                  <h2 class="title">Newly arrived</h2>
                  <h3 class="sub-title">
                    Sale up to <br />
                    10%
                  </h3>
                  <div class="link">
                    <a href="shop.html">shop now</a>
                  </div>
                </div>
              </div>
              <div
                class="home1-slide-item swiper-slide"
                data-swiper-autoplay="5000"
                data-bg-image="images/slider/home1/Rectangle 39.png"
              >
                <div class="home1-slide3-content">
                  <h2 class="title">Affectious gifts</h2>
                  <h3 class="sub-title">
                    <img
                      class="left-icon "
                      src="images/slider/home1/Rectangle 39.png"
                      alt="Slide Icon"
                    />
                    For friends & family
                    <img
                      class="right-icon "
                      src="images/banner/sale/sale-banner1-1.1.webp"
                      alt="Slide Icon"
                    />
                  </h3>
                  <div class="link">
                    <a href="shop.html">shop now</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="home1-slider-prev swiper-button-prev">
              <i class="ti-angle-left"></i>
            </div>
            <div class="home1-slider-next swiper-button-next">
              <i class="ti-angle-right"></i>
            </div>
          </div>
          {/* <!-- Slider main container End --> */}

          {/* <!-- Sale Banner Section Start --> */}
          <div class="section section-padding">
            <div class="container">
              {/* <!-- Section Title Start --> */}
              <div class="section-title text-center">
                <h3 class="sub-title">Just for you</h3>
                <h2 class="title title-icon-both">Making & crafting</h2>
              </div>
              {/* <!-- Section Title End --> */}

              <div class="row learts-mb-n40">
                <div class="col-lg-5 col-md-6 col-12 me-auto learts-mb-40">
                  <div
                    class="sale-banner1"
                    data-bg-image="images/banner/sale/sale-banner1-1.webp"
                  >
                    <div class="inner">
                      <img
                        src="images/banner/sale/sale-banner1-1.1.webp"
                        alt="Sale Banner Icon"
                      />
                      <span class="title">Spring sale</span>
                      <h2 class="sale-percent">
                        <span class="number">40</span> % <br /> off
                      </h2>
                      <a href="shop.html" class="link">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12 learts-mb-40">
                  <div class="sale-banner2">
                    <div class="inner">
                      <div class="image">
                        <img
                          src="images/banner/sale/sale-banner2-1.webp"
                          alt=""
                        />
                      </div>
                      <div class="content row justify-content-between mb-n3">
                        <div class="col-auto mb-3">
                          <h2 class="sale-percent">10% off</h2>
                          <span class="text">YOUR NEXT PURCHASE</span>
                        </div>
                        <div class="col-auto mb-3">
                          <a class="btn btn-hover-dark" href="shop.html">
                            SHOP NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Sale Banner Section End --> */}
        </div>

        {/* <!-- Product Section Start --> */}
        <div class="section section-fluid section-padding pt-0">
          <div class="container">
            {/* <!-- Section Title Start --> */}
            <div class="section-title text-center">
              <h3 class="sub-title">Shop now</h3>
              <h2 class="title title-icon-both">Shop our best-sellers</h2>
            </div>
            {/* <!-- Section Title End --> */}

            {/* <!-- Products Start --> */}
            <div class="products row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
              <Card />
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="container row black-box pt-5">
            <div className="px-5 col-lg-5 col-md-6 col-sm-12">
              <h2 style={{ color: 'white', letterSpacing: '3px' }}>
                ABOUT
                <br />
                JUSTSTRUCTURAL
              </h2>
              <div className="pt-5">
                <div>
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam dicta assumenda sed atque earum mollitia at laborum
                    vitae maxime voluptas maiores doloribus quo ipsa dolore
                    dolorem, aut vel possimus debitis.
                  </h6>
                  <h6 className="pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam dicta assumenda sed atque earum mollitia at laborum
                    vitae maxime voluptas maiores doloribus quo ipsa dolore
                    dolorem, aut vel possimus debitis.
                  </h6>
                  <h6 className="pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam dicta assumenda sed atque earum mollitia at laborum
                    vitae maxime voluptas maiores doloribus quo ipsa dolore
                    dolorem, aut vel possimus debitis.
                  </h6>
                  <h6 className="pt-4" style={{ opacity: '50%' }}>
                    {' '}
                    READ MORE{' '}
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-5 col-sm-12 d-flex justify-content-center align-items-end">
              <img
                src="../../img/Group.png"
                alt="JBL"
                className="responsive-img"
              />
            </div>
          </div>
        </div>
        <div className="p-0 pt-5 img-set">
          <img
            src="../../img/group 6.png"
            width={'1300px'}
            height={'500px'}
            className="galary-img"
          />
          <button style={{}} className="mb-2 mt-2 btn-galary">
            <span style={{ letterSpacing: '2px' }}>VIEW GALARY</span>
          </button>
        </div>
        <div className="pt-5">
          <div className="row pt-4">
            <div className="col-12 col-md-4 col-lg-4 ">
              <h4 className="text-style" style={{ letterSpacing: '2px' }}>
                WHAT OUR CLIENTS SAID
              </h4>
            </div>
            <div className="col-12 col-md-8 col-lg-4 px-4 d-flex align-items-center "></div>
            <div className="col-12 col-lg-4 d-flex align-items-center justify-content-end">
              <div className="d-flex">
                <div className="arrow-keys">
                  <FiArrowLeft size={40} />
                </div>
                <div className="arrow-keys">
                  <FiArrowRight size={40} />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-5">
              <Cardcomment />
              <Cardcomment />
              <Cardcomment />
              <Cardcomment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
