import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Start of header section
	============================================= */}
      <header id="in-sv-header" className="in-sv-header-section">
        <div className="in-sv-header-content position-relative">
          <div className="in-sv-header-logo position-absolute">
            <div className="brand-logo text-center  d-flex align-items-center justify-content-center">
              <a href="#">
                <img src="assets/img/h7/logo/logo1.png" alt="" />
              </a>
            </div>
          </div>
          <div className="in-sv-header-top-content-main-navigation">
            <div className="in-sv-header-top-content d-flex justify-content-between">
              <div className="in-sv-header-cta ul-li">
                <ul>
                  <li>
                    <i className="fal fa-map-marker-alt" /> 855 road, broklyn
                    street, new york
                  </li>
                  <li>
                    <i className="fal fa-phone-alt" /> 888 999 0000
                  </li>
                </ul>
              </div>
              <div className="in-sv-header-cta-social d-flex align-items-center ul-li">
                <div className="in-sv-header-cta">
                  <ul>
                    <li>
                      <i className="fal fa-paper-plane" /> needhelp@insurin.com
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="in-sv-header-main-navigation d-flex justify-content-between align-items-center">
              <div className="in-sv-header-menu">
                <nav className="in-sv-main-navigation-area clearfix ul-li">
                  <ul id="main-nav" className="nav navbar-nav clearfix">
                    <li className="dropdown">
                      <a href="!#">Home</a>
                      <ul className="dropdown-menu clearfix">
                        <li>
                          <a target="_blank" href="index-1.html">
                            Home One{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-2.html">
                            Home Two{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-3.html">
                            Home Three{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-4.html">
                            Home Four{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-5.html">
                            Home Five{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-6.html">
                            Home Six{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-7.html">
                            Home Seven{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a target="_blank" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="!#">Shop</a>
                      <ul className="dropdown-menu clearfix">
                        <li>
                          <a target="_blank" href="shop.html">
                            Shop Page{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="shop-single.html">
                            Shop Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="!#">Pages</a>
                      <ul className="dropdown-menu clearfix">
                        <li>
                          <a target="_blank" href="service.html">
                            Services
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="service-2.html">
                            Service Page 2
                          </a>
                        </li>
                        <li className="dropdown">
                          <a href="service-single.html">Services Details</a>
                          <ul className="dropdown-menu clearfix">
                            <li>
                              <a target="_blank" href="service-single.html">
                                Life Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Health Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Car Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Home Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Credit Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Transport Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Energy Insurence
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="!#">Testimonial</a>
                          <ul className="dropdown-menu clearfix">
                            <li>
                              <a target="_blank" href="testimonial.html">
                                Testimonial
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                href="testimonial-carousel.html"
                              >
                                Testimonial Carousel
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a target="_blank" href="team.html">
                            Team Page
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="team-single.html">
                            Team Details
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="faq.html">
                            FAQ Page
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="pricing.html">
                            Pricing Page
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="contact.html">
                            Contact Page
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="insurance-calculator.html">
                            Insurence Calculator
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="404.html">
                            404
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a className="" href="!#">
                        Blog
                      </a>
                      <ul className="dropdown-menu clearfix">
                        <li>
                          <a target="_blank" href="blog-list.html">
                            News{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="blog-grid.html">
                            News Grid
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="blog-list-2.html">
                            News List
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="blog-slider.html">
                            News Slider
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="blog-single.html">
                            News Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a className="" href="!#">
                        Portfolio
                      </a>
                      <ul className="dropdown-menu clearfix">
                        <li>
                          <a target="_blank" href="portfolio-slide.html">
                            Portfolio Slide{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="portfolio-grid.html">
                            Portfolio Grid
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="portfolio-masonry.html">
                            Porfolio Masonry
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="portfolio-single.html">
                            Portfolio Details
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="in-sv-header-cta-btn-grp d-flex align-items-center">
                <div className="in-sv-header-search">
                  <button className="search-btn">
                    <i className="far fa-search" />
                  </button>
                </div>
                <div className="in-sv-header-sidebar navSidebar-button">
                  <button>
                    <i className="fas fa-bars" />
                  </button>
                </div>
                <div className="in-sv-cta-btn text-uppercase">
                  <a href="#">Get a quote</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile_menu position-relative">
            <div className="mobile_menu_button open_mobile_menu">
              <i className="fal fa-bars" />
            </div>
            <div className="mobile_menu_wrap">
              <div className="mobile_menu_overlay open_mobile_menu" />
              <div className="mobile_menu_content">
                <div className="mobile_menu_close open_mobile_menu">
                  <i className="fal fa-times" />
                </div>
                <div className="m-brand-logo">
                  <a href="!#">
                    <img src="assets/img/h7/logo/logo2.png" alt="" />
                  </a>
                </div>
                <div className="in-m-search">
                  <form action="#">
                    <input type="text" name="search" placeholder="Search.." />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
                <nav className="mobile-main-navigation  clearfix ul-li">
                  <ul id="m-main-nav" className="nav navbar-nav clearfix">
                    <li className="dropdown">
                      <a href="!#">Home</a>
                      <ul className="dropdown-menu clearfix">
                        <li>
                          <a target="_blank" href="index-1.html">
                            Home 1{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-2.html">
                            Home 2{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-3.html">
                            Home 3{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-4.html">
                            Home 4{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-5.html">
                            Home 5{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-6.html">
                            Home 6{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="index-7.html">
                            Home 7{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a target="_blank" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="!#">Shop</a>
                      <ul className="dropdown-menu clearfix">
                        <li>
                          <a target="_blank" href="shop.html">
                            Shop Page{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="shop-single.html">
                            Shop Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="!#">Pages</a>
                      <ul className="dropdown-menu clearfix">
                        <li>
                          <a target="_blank" href="service.html">
                            Services
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="service-2.html">
                            Service Page 2
                          </a>
                        </li>
                        <li className="dropdown">
                          <a href="service-single.html">Services Details</a>
                          <ul className="dropdown-menu clearfix">
                            <li>
                              <a target="_blank" href="service-single.html">
                                Life Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Health Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Car Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Home Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Credit Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Transport Insurence
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="service-single.html">
                                Energy Insurence
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="!#">Testimonial</a>
                          <ul className="dropdown-menu clearfix">
                            <li>
                              <a target="_blank" href="testimonial.html">
                                Testimonial
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                href="testimonial-carousel.html"
                              >
                                Testimonial Carousel
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a target="_blank" href="team.html">
                            Team Page
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="team-single.html">
                            Team Details
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="faq.html">
                            FAQ Page
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="pricing.html">
                            Pricing Page
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="contact.html">
                            Contact Page
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="insurance-calculator.html">
                            Insurence Calculator
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="404.html">
                            404
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a className="" href="!#">
                        Blog
                      </a>
                      <ul className="dropdown-menu clearfix">
                        <li>
                          <a target="_blank" href="blog-list.html">
                            News{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="blog-grid.html">
                            News Grid
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="blog-list-2.html">
                            News List
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="blog-slider.html">
                            News Slider
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="blog-single.html">
                            News Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a className="" href="!#">
                        Portfolio
                      </a>
                      <ul className="dropdown-menu clearfix">
                        <li>
                          <a target="_blank" href="portfolio-slide.html">
                            Portfolio Slide{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="portfolio-grid.html">
                            Portfolio Grid
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="portfolio-masonry.html">
                            Porfolio Masonry
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="portfolio-single.html">
                            Portfolio Details
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* /Mobile-Menu */}
          </div>
        </div>
      </header>
      {/* /header */}
      {/* search filed */}
      <div className="search-body">
        <div className="search-form">
          <form action="#" className="search-form-area">
            <input
              className="search-input"
              type="search"
              placeholder="Search Here"
            />
            <button type="submit" className="search-btn1">
              <i className="fas fa-search" />
            </button>
          </form>
          <div className="outer-close text-center search-btn">
            <i className="far fa-times" />
          </div>
        </div>
      </div>
      {/* Sidebar sidebar Item */}
      <div className="xs-sidebar-group info-group">
        <div className="xs-overlay xs-bg-black">
          <div className="row loader-area">
            <div className="col-3 preloader-wrap">
              <div className="loader-bg" />
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg" />
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg" />
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg" />
            </div>
          </div>
        </div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">
                X
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents headline pera-content">
                <div className="content-inner">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/img/h7/logo/logo1.png" alt="" />
                    </a>
                  </div>
                  <div className="content-box">
                    <h5>About Us</h5>
                    <p className="text">
                      The argument in favor of using filler text goes something
                      like this: If you use real content in the Consulting
                      Process, anytime you reach a review point you’ll end up
                      reviewing and negotiating the content itself and not the
                      design.
                    </p>
                  </div>
                  <div className="gallery-box ul-li">
                    <h5>Gallery</h5>
                    <ul className="zoom-gallery">
                      <li>
                        <a
                          href="assets/img/gallery/gl1.png"
                          data-source="assets/img/gallery/gl1.png"
                        >
                          <img src="assets/img/gallery/gl1.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/gallery/gl2.png"
                          data-source="assets/img/gallery/gl2.png"
                        >
                          <img src="assets/img/gallery/gl2.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/gallery/gl3.png"
                          data-source="assets/img/gallery/gl3.png"
                        >
                          <img src="assets/img/gallery/gl3.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/gallery/gl4.png"
                          data-source="assets/img/gallery/gl4.png"
                        >
                          <img src="assets/img/gallery/gl4.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/gallery/gl5.png"
                          data-source="assets/img/gallery/gl4.png"
                        >
                          <img src="assets/img/gallery/gl5.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/gallery/gl6.png"
                          data-source="assets/img/gallery/gl4.png"
                        >
                          <img src="assets/img/gallery/gl6.png" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="content-box">
                    <h5>Social Account</h5>
                    <ul className="social-box">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="fab fa-facebook-f"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com/"
                          className="fab fa-twitter"
                        />
                      </li>
                      <li>
                        <a
                          href="https://dribbble.com/"
                          className="fab fa-dribbble"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          className="fab fa-linkedin"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of header section
	============================================= */}
      {/* Start of slider section
	============================================= */}
      <section id="in-sv-slider" className="in-sv-slider-section">
        <rs-module-wrap
          id="rev_slider_23_1_wrapper"
          data-alias="slider-15"
          data-source="gallery"
          style={{
            visibility: "hidden",
            background: "transparent",
            padding: 0,
            margin: "0px auto",
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <rs-module id="rev_slider_23_1" style={{}} data-version="6.5.16">
            <rs-slides>
              <rs-slide
                style={{ position: "absolute" }}
                data-key="rs-53"
                data-title="Slide"
                data-thumb="assets/Background.png"
                data-anim="d:20;ms:1500ms;f:slidebased;"
                data-in="o:-0.5;x:(15%);y:(15%);sx:0.8;sy:0.8;row:5;col:5;"
                data-out="o:0.5;x:(-15%);y:(-15%);sx:0.8;sy:0.8;row:5;col:5;"
              >
                <img
                  src="assets/Background.png"
                  alt=""
                  title="Background"
                  width={1920}
                  height={810}
                  className="rev-slidebg tp-rs-img"
                  data-no-retina=""
                />
                {/*
                 */}
                <rs-layer
                  id="slider-23-slide-53-layer-0"
                  data-type="text"
                  data-rsp_ch="on"
                  data-xy="xo:15px,16px,12px,7px;yo:290px,230px,220px,144px;"
                  data-text="w:normal;s:15,16,16,14;l:25,21,15,20;"
                  data-padding="t:3,3,3,2;r:15,13,10,15;b:3,3,3,2;l:15,13,10,15;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{
                    zIndex: 5,
                    backgroundColor: "#034b5b",
                    fontFamily: '"Libre Baskerville"',
                  }}
                >
                  Building a Better Future
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-53-layer-1"
                  data-type="text"
                  data-color="#0b0b0b"
                  data-rsp_ch="on"
                  data-xy="xo:15px,13px,9px,5px;y:m;yo:-7px,-6px,-4px,-2px;"
                  data-text="w:normal;s:72,63,47,36;l:80,70,53,40;fw:700;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:600;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 6, fontFamily: '"Libre Baskerville"' }}
                >
                  Get Insurence
                  <br />
                  For Your Better
                  <br />
                  Future.
                  <br />
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-53-layer-2"
                  data-type="text"
                  data-color="#202020"
                  data-rsp_ch="on"
                  data-xy="xo:15px,13px,9px,5px;y:m;yo:166px,145px,110px,89px;"
                  data-text="w:normal;s:20,18,16,16;l:30,26,22,20;fw:500;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:1000;sp:2200;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 7, fontFamily: '"Montserrat"' }}
                >
                  Only our company gives you an investment with your life
                  <br />
                  cost that create wealth for your future.
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-53-layer-3"
                  data-type="button"
                  data-rsp_ch="on"
                  data-xy="xo:14px,12px,9px,5px;y:m;yo:245px,214px,162px,131px;"
                  data-text="w:normal;s:20,17,12,7;l:25,21,15,9;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:1200;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{
                    zIndex: 8,
                    fontFamily: '"Montserrat"',
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  <div className="in-sv-btn text-uppercase">
                    <br />
                    <a href="contact.html">
                      COntact Us{" "}
                      <span>
                        <i className="fal fa-long-arrow-right" />
                      </span>
                    </a>
                    <br />
                  </div>
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-53-layer-5"
                  data-type="image"
                  data-rsp_ch="on"
                  data-xy="x:r;xo:70px,61px,46px,28px;y:b;yo:111px,97px,73px,45px;"
                  data-text="w:normal;s:20,17,12,7;l:0,21,15,9;"
                  data-dim="w:200px,175px,132px,81px;h:200px,175px,132px,81px;"
                  data-basealign="slide"
                  data-frame_0="x:100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:1500;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  data-loop_999="rZ:360;sp:8000;st:500;"
                  style={{ zIndex: 10 }}
                >
                  <img
                    src="assets/circle.png"
                    alt=""
                    className="tp-rs-img"
                    width={200}
                    height={200}
                    data-no-retina=""
                  />
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-53-layer-8"
                  data-type="image"
                  data-rsp_ch="on"
                  data-xy="xo:50px,43px,32px,19px;y:b;yo:57px,49px,37px,22px;"
                  data-text="w:normal;s:20,17,12,7;l:0,21,15,9;"
                  data-dim="w:176px,154px,117px,72px;h:204px,178px,135px,83px;"
                  data-vbility="t,t,f,f"
                  data-basealign="slide"
                  data-frame_0="x:175%;o:1;"
                  data-frame_0_mask="u:t;x:-100%;"
                  data-frame_1="e:power3.out;st:2500;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 11 }}
                >
                  <img
                    src="assets/sh1.png"
                    alt=""
                    className="tp-rs-img"
                    width={176}
                    height={204}
                    data-no-retina=""
                  />
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-53-layer-9"
                  data-type="image"
                  data-rsp_ch="on"
                  data-xy="x:c;xo:86px,75px,56px,34px;yo:112px,98px,74px,45px;"
                  data-text="w:normal;s:20,17,12,7;l:0,21,15,9;"
                  data-dim="w:247px,216px,164px,101px;h:169px,147px,111px,68px;"
                  data-frame_0="x:-175%;o:1;"
                  data-frame_0_mask="u:t;x:100%;"
                  data-frame_1="e:power3.out;st:2500;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 12 }}
                >
                  <img
                    src="assets/sh2.png"
                    alt=""
                    className="tp-rs-img"
                    width={247}
                    height={169}
                    data-no-retina=""
                  />
                </rs-layer>
                {/*
                 */}{" "}
              </rs-slide>
              <rs-slide
                style={{ position: "absolute" }}
                data-key="rs-58"
                data-title="Slide"
                data-thumb="assets/Background.png"
                data-anim="d:20;ms:1500ms;f:slidebased;"
                data-in="o:-0.5;x:(15%);y:(15%);sx:0.8;sy:0.8;row:5;col:5;"
                data-out="o:0.5;x:(-15%);y:(-15%);sx:0.8;sy:0.8;row:5;col:5;"
              >
                <img
                  src="assets/Background.png"
                  alt=""
                  title="Background"
                  width={1920}
                  height={810}
                  className="rev-slidebg tp-rs-img"
                  data-no-retina=""
                />
                {/*
                 */}
                <rs-layer
                  id="slider-23-slide-58-layer-0"
                  data-type="text"
                  data-rsp_ch="on"
                  data-xy="xo:15px,16px,12px,7px;yo:290px,230px,220px,144px;"
                  data-text="w:normal;s:15,16,16,14;l:25,21,15,20;"
                  data-padding="t:3,3,3,2;r:15,13,10,15;b:3,3,3,2;l:15,13,10,15;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{
                    zIndex: 5,
                    backgroundColor: "#034b5b",
                    fontFamily: '"Libre Baskerville"',
                  }}
                >
                  Building a Better Future
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-58-layer-1"
                  data-type="text"
                  data-color="#0b0b0b"
                  data-rsp_ch="on"
                  data-xy="xo:15px,13px,9px,5px;y:m;yo:-7px,-6px,-4px,-2px;"
                  data-text="w:normal;s:72,63,47,36;l:80,70,53,40;fw:700;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:600;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 6, fontFamily: '"Libre Baskerville"' }}
                >
                  Get Insurence
                  <br />
                  For Your Better
                  <br />
                  Future.
                  <br />
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-58-layer-2"
                  data-type="text"
                  data-color="#202020"
                  data-rsp_ch="on"
                  data-xy="xo:15px,13px,9px,5px;y:m;yo:166px,145px,110px,89px;"
                  data-text="w:normal;s:20,18,16,16;l:30,26,22,20;fw:500;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:1000;sp:2200;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 7, fontFamily: '"Montserrat"' }}
                >
                  Only our company gives you an investment with your life
                  <br />
                  cost that create wealth for your future.
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-58-layer-3"
                  data-type="button"
                  data-rsp_ch="on"
                  data-xy="xo:14px,12px,9px,5px;y:m;yo:245px,214px,162px,131px;"
                  data-text="w:normal;s:20,17,12,7;l:25,21,15,9;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:1200;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{
                    zIndex: 8,
                    fontFamily: '"Montserrat"',
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  <div className="in-sv-btn text-uppercase">
                    <br />
                    <a href="contact.html">
                      COntact Us{" "}
                      <span>
                        <i className="fal fa-long-arrow-right" />
                      </span>
                    </a>
                    <br />
                  </div>
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-58-layer-5"
                  data-type="image"
                  data-rsp_ch="on"
                  data-xy="x:r;xo:70px,61px,46px,28px;y:b;yo:111px,97px,73px,45px;"
                  data-text="w:normal;s:20,17,12,7;l:0,21,15,9;"
                  data-dim="w:200px,175px,132px,81px;h:200px,175px,132px,81px;"
                  data-basealign="slide"
                  data-frame_0="x:100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:1500;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  data-loop_999="rZ:360;sp:8000;st:500;"
                  style={{ zIndex: 10 }}
                >
                  <img
                    src="assets/circle.png"
                    alt=""
                    className="tp-rs-img"
                    width={200}
                    height={200}
                    data-no-retina=""
                  />
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-58-layer-8"
                  data-type="image"
                  data-rsp_ch="on"
                  data-xy="xo:50px,43px,32px,19px;y:b;yo:57px,49px,37px,22px;"
                  data-text="w:normal;s:20,17,12,7;l:0,21,15,9;"
                  data-dim="w:176px,154px,117px,72px;h:204px,178px,135px,83px;"
                  data-vbility="t,t,f,f"
                  data-basealign="slide"
                  data-frame_0="x:175%;o:1;"
                  data-frame_0_mask="u:t;x:-100%;"
                  data-frame_1="e:power3.out;st:2500;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 11 }}
                >
                  <img
                    src="assets/sh1.png"
                    alt=""
                    className="tp-rs-img"
                    width={176}
                    height={204}
                    data-no-retina=""
                  />
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-58-layer-9"
                  data-type="image"
                  data-rsp_ch="on"
                  data-xy="x:c;xo:86px,75px,56px,34px;yo:112px,98px,74px,45px;"
                  data-text="w:normal;s:20,17,12,7;l:0,21,15,9;"
                  data-dim="w:247px,216px,164px,101px;h:169px,147px,111px,68px;"
                  data-frame_0="x:-175%;o:1;"
                  data-frame_0_mask="u:t;x:100%;"
                  data-frame_1="e:power3.out;st:2500;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 12 }}
                >
                  <img
                    src="assets/sh2.png"
                    alt=""
                    className="tp-rs-img"
                    width={247}
                    height={169}
                    data-no-retina=""
                  />
                </rs-layer>
                {/*
                 */}{" "}
              </rs-slide>
              <rs-slide
                style={{ position: "absolute" }}
                data-key="rs-59"
                data-title="Slide"
                data-thumb="assets/Background.png"
                data-anim="d:20;ms:1500ms;f:slidebased;"
                data-in="o:-0.5;x:(15%);y:(15%);sx:0.8;sy:0.8;row:5;col:5;"
                data-out="o:0.5;x:(-15%);y:(-15%);sx:0.8;sy:0.8;row:5;col:5;"
              >
                <img
                  src="assets/Background.png"
                  alt=""
                  title="Background"
                  width={1920}
                  height={810}
                  className="rev-slidebg tp-rs-img"
                  data-no-retina=""
                />
                {/*
                 */}
                <rs-layer
                  id="slider-23-slide-59-layer-0"
                  data-type="text"
                  data-rsp_ch="on"
                  data-xy="xo:15px,16px,12px,7px;yo:290px,230px,220px,144px;"
                  data-text="w:normal;s:15,16,16,14;l:25,21,15,20;"
                  data-padding="t:3,3,3,2;r:15,13,10,15;b:3,3,3,2;l:15,13,10,15;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{
                    zIndex: 5,
                    backgroundColor: "#034b5b",
                    fontFamily: '"Libre Baskerville"',
                  }}
                >
                  Building a Better Future
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-59-layer-1"
                  data-type="text"
                  data-color="#0b0b0b"
                  data-rsp_ch="on"
                  data-xy="xo:15px,13px,9px,5px;y:m;yo:-7px,-6px,-4px,-2px;"
                  data-text="w:normal;s:72,63,47,36;l:80,70,53,40;fw:700;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:600;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 6, fontFamily: '"Libre Baskerville"' }}
                >
                  Get Insurence
                  <br />
                  For Your Better
                  <br />
                  Future.
                  <br />
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-59-layer-2"
                  data-type="text"
                  data-color="#202020"
                  data-rsp_ch="on"
                  data-xy="xo:15px,13px,9px,5px;y:m;yo:166px,145px,110px,89px;"
                  data-text="w:normal;s:20,18,16,16;l:30,26,22,20;fw:500;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:1000;sp:2200;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 7, fontFamily: '"Montserrat"' }}
                >
                  Only our company gives you an investment with your life
                  <br />
                  cost that create wealth for your future.
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-59-layer-3"
                  data-type="button"
                  data-rsp_ch="on"
                  data-xy="xo:14px,12px,9px,5px;y:m;yo:245px,214px,162px,131px;"
                  data-text="w:normal;s:20,17,12,7;l:25,21,15,9;"
                  data-frame_0="x:-100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:1200;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{
                    zIndex: 8,
                    fontFamily: '"Montserrat"',
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  <div className="in-sv-btn text-uppercase">
                    <br />
                    <a href="contact.html">
                      COntact Us{" "}
                      <span>
                        <i className="fal fa-long-arrow-right" />
                      </span>
                    </a>
                    <br />
                  </div>
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-59-layer-5"
                  data-type="image"
                  data-rsp_ch="on"
                  data-xy="x:r;xo:70px,61px,46px,28px;y:b;yo:111px,97px,73px,45px;"
                  data-text="w:normal;s:20,17,12,7;l:0,21,15,9;"
                  data-dim="w:200px,175px,132px,81px;h:200px,175px,132px,81px;"
                  data-basealign="slide"
                  data-frame_0="x:100%;"
                  data-frame_0_mask="u:t;"
                  data-frame_1="st:1500;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  data-loop_999="rZ:360;sp:8000;st:500;"
                  style={{ zIndex: 10 }}
                >
                  <img
                    src="assets/circle.png"
                    alt=""
                    className="tp-rs-img"
                    width={200}
                    height={200}
                    data-no-retina=""
                  />
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-59-layer-8"
                  data-type="image"
                  data-rsp_ch="on"
                  data-xy="xo:50px,43px,32px,19px;y:b;yo:57px,49px,37px,22px;"
                  data-text="w:normal;s:20,17,12,7;l:0,21,15,9;"
                  data-dim="w:176px,154px,117px,72px;h:204px,178px,135px,83px;"
                  data-vbility="t,t,f,f"
                  data-basealign="slide"
                  data-frame_0="x:175%;o:1;"
                  data-frame_0_mask="u:t;x:-100%;"
                  data-frame_1="e:power3.out;st:2500;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 11 }}
                >
                  <img
                    src="assets/sh1.png"
                    alt=""
                    className="tp-rs-img"
                    width={176}
                    height={204}
                    data-no-retina=""
                  />
                </rs-layer>
                {/*

							*/}
                <rs-layer
                  id="slider-23-slide-59-layer-9"
                  data-type="image"
                  data-rsp_ch="on"
                  data-xy="x:c;xo:86px,75px,56px,34px;yo:112px,98px,74px,45px;"
                  data-text="w:normal;s:20,17,12,7;l:0,21,15,9;"
                  data-dim="w:247px,216px,164px,101px;h:169px,147px,111px,68px;"
                  data-frame_0="x:-175%;o:1;"
                  data-frame_0_mask="u:t;x:100%;"
                  data-frame_1="e:power3.out;st:2500;sp:2000;"
                  data-frame_1_mask="u:t;"
                  data-frame_999="o:0;st:w;"
                  style={{ zIndex: 12 }}
                >
                  <img
                    src="assets/sh2.png"
                    alt=""
                    className="tp-rs-img"
                    width={247}
                    height={169}
                    data-no-retina=""
                  />
                </rs-layer>
                {/*
                 */}{" "}
              </rs-slide>
            </rs-slides>
            <rs-static-layers>
              {/*
               */}
            </rs-static-layers>
          </rs-module>
        </rs-module-wrap>
        {/* END REVOLUTION SLIDER */}
      </section>
      {/* End of slider section
	============================================= */}
    </>
  );
}
