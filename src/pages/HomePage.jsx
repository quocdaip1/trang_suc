import Header from "../components/header/Header";
import Slick from "../components/slick/Slick";
import ItemSlick from "../components/slick/ItemSlick";
import "../style/pages/homePage.scss";
import Footer from "../components/footer/Footer";
import FadeSlick from "../components/slick/FadeSlick";
import NewsSlick from "../components/slick/NewsSlick";
import uuid from "react-uuid";
import ModalProduct from "../components/modals/modalProduct";
import { useState } from "react";
import ModalLogin from "../components/modals/modalLogin";
import { componentDidMount, componentUnmount } from "../service/utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const HomePage = (props) => {
  const dataRedux = useSelector((state) => state.data);

  //video state
  const [videoOpen, setVideoOpen] = useState(false);
  //end

  const saleProduct = dataRedux.data.filter((item) => {
    return item.onsale;
  });

  //news array
  const news = [
    {
      link: "https://i.postimg.cc/50BXy0vV/download.png",
      date: "01 Jan 2023",
      title: " Matching Jewelly Sets with your Outwear.",
    },
    {
      link: "https://i.postimg.cc/3NDndz7p/download.png",
      date: "02 Jan 2023",
      title: "Special Wedding Rings Sets for Him and for Her.",
    },
    {
      link: "https://i.postimg.cc/9frx6DSJ/download.png",
      date: "03 Jan 2023",
      title: "Ruby on Rose Accessories and Blue Gemstones.",
    },
    {
      link: "https://i.postimg.cc/50BXy0vV/download.png",
      date: "01 Jan 2023",
      title: " Matching Jewelly Sets with your Outwear.",
    },
    {
      link: "https://i.postimg.cc/3NDndz7p/download.png",
      date: "02 Jan 2023",
      title: "Special Wedding Rings Sets for Him and for Her.",
    },
    {
      link: "https://i.postimg.cc/9frx6DSJ/download.png",
      date: "03 Jan 2023",
      title: "Ruby on Rose Accessories and Blue Gemstones.",
    },
  ];
  //end

  //breakpoint custom
  const breakpoint = {
    sell: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    product: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    news: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //end

  return (
    <LazyLoad
      offset={100}
      placeholder={'Loading...'}
    >
      <div id="index-page" className="bg-dark">
        <Header />
        {/* index content */}
        <div id="main">
          {/* banner */}
          <section className="banner">
            <div className="container">
              <div className="row">
                {/* baner left */}
                <div className="col col-lg-6 col-md-6 col-sm-8 col-12">
                  <div className="col-left-wraper">
                    <div className="banner-text ">
                      <span
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="600"
                      >
                        jeewlry design with love
                      </span>
                      <h1
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="600"
                      >
                        High-End Jewelry Item
                      </h1>
                    </div>
                    <div
                      className="banner-btn "
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="600"
                    >
                      <ul className="btn-list">
                        <li>
                          <a className="btn border-btn" href="#">
                            <span>buy now</span>
                          </a>
                        </li>
                        <li>
                          <a className="btn main-btn" href="#">
                            <span>explore now</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* end banner left */}
                {/* banner right */}
                <div className="col col-lg-6 col-md-6 col-12">
                  <div
                    className="col-right-wraper "
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="600"
                  >
                    <FadeSlick />
                  </div>
                </div>
                {/* end banner right */}
              </div>
            </div>
          </section>
          {/* end banner */}

          {/* category */}
          <section className="category-box">
            <div className="container">
              <div className="category-box-wraper bg-35">
                <div className="row">
                  <div className="col col-lg-3 col-sm-6">
                    <div className="col-wraper">
                      <Link to={"/jewelry/bracelet"}>
                        <div className="img">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/hGCy9NMv/9056425.gif"
                            alt=""
                          />
                        </div>
                        <h5 className="title">Bracelet</h5>
                        <p>10 Products</p>
                        <span className="overlay-img">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/W3c1CxGD/2845355.png"
                            alt=""
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col col-lg-3 col-sm-6">
                    <div className="col-wraper">
                      <Link to={"/jewelry/diamond ring"}>
                        <div className="img">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/KYL7YVVC/8722086.gif"
                            alt=""
                          />
                        </div>
                        <h5 className="title">Rings</h5>
                        <p>10 Products</p>
                        <span className="overlay-img">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/x8YqJBqr/508709.png"
                            alt=""
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col col-lg-3 col-sm-6">
                    <div className="col-wraper">
                      <Link to={"/jewelry/necklaces"}>
                        <div className="img">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/YCVK7GKb/9056449.gif"
                            alt=""
                          />
                        </div>
                        <h5 className="title">Gold Necklaces</h5>
                        <p>10 Products</p>
                        <span className="overlay-img">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/c1Mvy15d/775385.png"
                            alt=""
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col col-lg-3 col-sm-6">
                    <div className="col-wraper">
                      <Link to={"/jewelry/earrings"}>
                        <div className="img">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/02QBNkC3/9056432.gif"
                            alt=""
                          />
                        </div>
                        <h5 className="title">Design Earrings</h5>
                        <p>10 Products</p>
                        <span className="overlay-img">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/d3B38nTh/3985821.png"
                            alt=""
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end catrgory */}

          {/* about */}
          <section className="about">
            <div className="container">
              <div className="row">
                <div className="col col-lg-6 col-md-10">
                  <div className="col-left-wraper">
                    <div className="row">
                      <div className="col col-md-6 col-sm-6 col-12">
                        <div
                          className="item-wraper bg-35"
                          data-aos="fade-down-right"
                          data-aos-easing="linear"
                          data-aos-duration="600"
                        >
                          <div className="img">
                            <img skeleton="true"
                              loading="lazy"
                              src="https://i.postimg.cc/KYL7YVVC/8722086.gif"
                              alt=""
                            />
                          </div>
                          <h4>
                            <a href="#">New Rings</a>{" "}
                          </h4>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quo dignissimos tempora quibusdam!
                          </p>
                        </div>
                      </div>
                      <div className="col col-md-6 col-sm-6 col-12">
                        <div
                          className="item-single imagesiny"
                          data-aos="fade-down-left"
                          data-aos-easing="linear"
                          data-aos-duration="600"
                        >
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/4dBjxn9K/04.jpg"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="col col-md-6 col-sm-6 col-12">
                        <div
                          className="item-single imagesiny"
                          data-aos="fade-up-right"
                          data-aos-easing="linear"
                          data-aos-duration="600"
                        >
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/HWvfGcmR/download.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col col-md-6 col-sm-6 col-12">
                        <div
                          className="item-wraper bg-35 mt-6"
                          data-aos="fade-up-left"
                          data-aos-easing="linear"
                          data-aos-duration="600"
                        >
                          <div className="img">
                            <img skeleton="true"
                              loading="lazy"
                              src="https://i.postimg.cc/YCVK7GKb/9056449.gif"
                              alt=""
                            />
                          </div>
                          <h4>
                            <a href="#">Wedding Collection</a>{" "}
                          </h4>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quo dignissimos tempora quibusdam!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-10">
                  <div className="col-right-wraper">
                    <div className="title about-title">
                      <span
                        data-aos="zoom-out-left"
                        data-aos-easing="linear"
                        data-aos-duration="600"
                      >
                        about us
                      </span>
                      <h2
                        data-aos="zoom-out-left"
                        data-aos-easing="linear"
                        data-aos-duration="600"
                      >
                        Crafting Jewellery Since 1900
                      </h2>
                    </div>
                    <p
                      className="about-description"
                      data-aos="zoom-out-left"
                      data-aos-easing="linear"
                      data-aos-duration="600"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime voluptatem magni, non quod ullam ratione aliquid
                      saepe iure quibusdam doloribus explicabo unde, officia
                      natus, amet eum! Explicabo repellat aliquid eius!
                    </p>
                    <a href="#" className="link about-link btn main-btn">
                      <span>know more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-bg">
              <div className="bg-img">
                <img skeleton="true"
                  loading="lazy"
                  src="https://i.postimg.cc/nzqvV3cR/download.jpg"
                  alt=""
                />
              </div>
            </div>
          </section>
          {/* end about */}

          {/* saling */}
          <section
            className="selling"
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            <img skeleton="true"
              loading="lazy"
              className="sell-sub-img"
              src="https://i.postimg.cc/y6tvCmw2/download.png"
              alt=""
            />
            <div className="container">
              <div className="row">
                <div className="col col-lg-5">
                  <div className="col-left-wraper">
                    <div className="sell-title title">
                      <span>buy now</span>
                      <h2>Bestselling Products</h2>
                    </div>
                    <p className="sell-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime voluptatem magni, non quod ullam ratione aliquid
                      saepe iure quibusdam doloribus explicabo unde, officia
                      natus, amet eum! Explicabo repellat aliquid eius!
                    </p>
                    <a href="#" className="link sell-link btn border-btn">
                      <span>show more</span>
                    </a>
                  </div>
                </div>
                <div className="col col-lg-7">
                  <div className="col-right-wraper">
                    <Slick show={3} row={1} custom={breakpoint.sell}>
                      {saleProduct.map((item) => {
                        return <ItemSlick key={uuid()} item={item} />;
                      })}
                    </Slick>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end saling */}

          {/* product */}
          <section
            className="products"
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            <div className="container">
              <div className="title">
                <span>shopping</span>
                <h2>Our Products</h2>
              </div>
              <div className="products-wraper">
                <Slick show={4} row={2} custom={breakpoint.product}>
                  {dataRedux.data.map((item) => {
                    return <ItemSlick key={uuid()} item={item} />;
                  })}
                </Slick>
              </div>
            </div>
          </section>
          {/* end products */}

          {/* service */}
          <section className="services bg-35">
            <div className="container">
              <div className="services-title title title-section">
                <img skeleton="true"
                  loading="lazy"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  src="https://i.postimg.cc/wvfRLdK3/logo-removebg-preview.png"
                  alt=""
                />
                <span
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="750"
                >
                  new collection
                </span>
                <h2
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  Handpicked Products
                </h2>
              </div>
              <div className="services-content">
                <div className="row">
                  <div className="col col-lg-4 col-md-6 col-12">
                    <div
                      className="item-wraper"
                      data-aos="zoom-in-right"
                      data-aos-duration="800"
                    >
                      <div className="item-img imagesiny">
                        <a href="#">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/pd8tKfgj/download.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="item-inner bg-dark">
                        <div className="icon">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/d3B38nTh/3985821.png"
                            alt=""
                          />
                        </div>
                        <h3>
                          <a href="#">Artifical Earings</a>
                        </h3>
                        <p>
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae; Donec velit neque,
                          auctor sit amet
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-4 col-md-6 col-12">
                    <div
                      className="item-wraper"
                      data-aos="zoom-in"
                      data-aos-duration="800"
                    >
                      <div className="item-img imagesiny">
                        <a href="#">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/D0CV7Bb9/2.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="item-inner bg-dark">
                        <div className="icon">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/x8YqJBqr/508709.png"
                            alt=""
                          />
                        </div>
                        <h3>
                          <a href="#">Bracelet Curb</a>
                        </h3>
                        <p>
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae; Donec velit neque,
                          auctor sit amet
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-4 col-md-6 col-12">
                    <div
                      className="item-wraper"
                      data-aos="zoom-in-left"
                      data-aos-duration="800"
                    >
                      <div className="item-img imagesiny">
                        <a href="#">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/brwMVkF3/3.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="item-inner bg-dark">
                        <div className="icon">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/c1Mvy15d/775385.png"
                            alt=""
                          />
                        </div>
                        <h3>
                          <a href="#">Azouel Variable</a>
                        </h3>
                        <p>
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae; Donec velit neque,
                          auctor sit amet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end service */}

          {/* counter */}
          <div className="counter-section">
            <div className="container">
              <div className="row">
                <div className="col col-lg-3 col-6">
                  <div className="count-item">
                    <div className="count-icon">
                      <img skeleton="true"
                        loading="lazy"
                        src="https://i.postimg.cc/qq5drjPN/4176420.png"
                        alt=""
                      />
                    </div>
                    <div className="count-title title">
                      <h2>
                        <CountUp
                          start={0}
                          end={80}
                          duration={2}
                          enableScrollSpy={true}
                        />
                        K
                      </h2>
                      <span>Jewelries in Album</span>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-6">
                  <div className="count-item">
                    <div className="count-icon">
                      <img skeleton="true"
                        loading="lazy"
                        src="https://i.postimg.cc/QN23fnJz/456115.png"
                        alt=""
                      />
                    </div>
                    <div className="count-title title">
                      <h2>
                        {" "}
                        <CountUp
                          start={0}
                          end={10}
                          duration={2}
                          enableScrollSpy={true}
                        />
                        M
                      </h2>
                      <span>Happy Feedbacks</span>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-6">
                  <div className="count-item">
                    <div className="count-icon">
                      <img skeleton="true"
                        loading="lazy"
                        src="https://i.postimg.cc/tJyzTbHf/8081823.png"
                        alt=""
                      />
                    </div>
                    <div className="count-title title">
                      <h2>
                        {" "}
                        <CountUp
                          start={0}
                          end={7}
                          duration={2}
                          enableScrollSpy={true}
                        />
                        K
                      </h2>
                      <span>Categories Served</span>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-6">
                  <div className="count-item">
                    <div className="count-icon">
                      <img skeleton="true"
                        loading="lazy"
                        src="https://i.postimg.cc/x8zS0Kng/1533506.png"
                        alt=""
                      />
                    </div>
                    <div className="count-title title">
                      <h2>
                        {" "}
                        <CountUp
                          start={0}
                          end={100}
                          duration={2}
                          enableScrollSpy={true}
                        />
                        M
                      </h2>
                      <span>Client</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end counter */}

          {/* onsale */}
          <section className="on-sale bg-35">
            <div className="container">
              <div className="on-sale-title title title-section">
                <img skeleton="true"
                  loading="lazy"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  src="https://i.postimg.cc/wvfRLdK3/logo-removebg-preview.png"
                  alt=""
                />
                <span
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="750"
                >
                  MAYBE YOU HAVE EARNED IT
                </span>
                <h2
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  Featured products
                </h2>
              </div>
              <div className="on-sale-content">
                <div className="row">
                  <div className="col col-lg-6 col-12">
                    <div className="col-left-wraper col-wraper imagesiny">
                      <img skeleton="true"
                        loading="lazy"
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="600"
                        className="big-img"
                        src="https://i.postimg.cc/dVQzmvmm/download.jpg"
                        alt=""
                      />
                      <div className="description">
                        <h2
                          data-aos="fade-up"
                          data-aos-easing="linear"
                          data-aos-duration="800"
                        >
                          <a href="#">Ariel Ring</a>
                        </h2>
                        <span
                          data-aos="fade-up"
                          data-aos-easing="linear"
                          data-aos-duration="800"
                        >
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Ipsa perferendis ratione et aliquid quisquam
                          distinctio?
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-6 col-12">
                    <div className="col-right-wraper">
                      <div className="row">
                        <div className="col col-lg-12 col-md-6 col-12">
                          <div
                            className="col-item col-wraper imagesiny"
                            data-aos="fade-down-left"
                            data-aos-easing="linear"
                            data-aos-duration="600"
                          >
                            <img skeleton="true"
                              loading="lazy"
                              className="small-img"
                              src="https://i.postimg.cc/bvkCGv4Y/download.jpg"
                              alt=""
                            />
                            <div className="description">
                              <h2>
                                <a href="#">Agonfly Jewelry</a>
                              </h2>
                              <span>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ipsa perferendis ratione et
                                aliquid quisquam distinctio?
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col col-lg-12 col-md-6 col-12">
                          <div
                            className="col-item col-wraper imagesiny"
                            data-aos="fade-up-left"
                            data-aos-easing="linear"
                            data-aos-duration="600"
                          >
                            <img skeleton="true"
                              loading="lazy"
                              className="small-img"
                              src="https://i.postimg.cc/28g74DQ1/download.jpg"
                              alt=""
                            />
                            <div className="description">
                              <h2>
                                <a href="#">Coin Gold necklaces</a>
                              </h2>
                              <span>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ipsa perferendis ratione et
                                aliquid quisquam distinctio?
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end onsale */}

          {/* video */}
          <section className="video">
            <div
              className={`modal-video ${videoOpen ? "active" : ""}`}
              /* data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="600" */
            >
              <div className="container">
                <div className="overlay"></div>
                <button
                  onClick={() => {
                    setVideoOpen(false);
                    componentUnmount();
                  }}
                  className="close-video rs-btn"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="video-wraper ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/yWc1MkqtXz8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col col-lg-6 col-md-10 col-12">
                  <div
                    className="col-left-wraper"
                    data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="600"
                  >
                    <div className="title">
                      <span>design video</span>
                      <h2>Make Your Day Brighter</h2>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum quia ipsam corrupti in? Incidunt itaque iure magni
                      quasi, eligendi repellat minus, aliquam nesciunt facilis
                      et voluptatem minima at, nulla quidem.
                    </p>
                    <a href="#" className="btn main-btn">
                      <span>see more</span>
                    </a>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-10 col-12">
                  <div
                    className="col-right-wraper"
                    data-aos="zoom-in-up"
                    data-aos-easing="linear"
                    data-aos-duration="600"
                  >
                    <img skeleton="true"
                      loading="lazy"
                      src="https://i.postimg.cc/CL1YdJqK/download.jpg"
                      alt=""
                    />
                    <div
                      onClick={() => {
                        setVideoOpen(true);
                        componentDidMount();
                      }}
                      className="play bg-35"
                    >
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-video">
              <img skeleton="true"
                loading="lazy"
                src="https://i.postimg.cc/JnCMnkw4/image.png"
                alt=""
              />
            </div>
          </section>
          {/* end video */}

          {/* newsfeed */}
          <section className="news-feeds">
            <div className="container">
              <div className="news-title title">
                <span
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  blog
                </span>
                <h2
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  News feeds
                </h2>
              </div>
              <div
                className="news-content"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="600"
              >
                <Slick show={3} row={1} custom={breakpoint.news}>
                  {news.map((item) => {
                    return <NewsSlick item={item} key={uuid()} />;
                  })}
                </Slick>
              </div>
            </div>
          </section>
          {/* end news feed */}
        </div>
        {/* end index content */}

        {/* modal product */}
        <ModalProduct
        /* end modal product */
        />
        <Footer />
        {/* modal login */}
        <ModalLogin />
        {/* end modal login */}
      </div>
    </LazyLoad>
  );
};

export default HomePage;
