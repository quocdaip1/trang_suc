import "../../style/components/footer.scss";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluit">
          {/*  footer top*/}
          <div className="ft-top">
            <div className="row">
              {/* col left */}
              <div className="pd-0 col-lg-8">
                {/* heading left*/}
                <div className="ft-top-left">
                  <div className="back-to-top">
                    <a href="#main" className="back-inner">
                      <img skeleton="true"
                        loading="lazy"
                        src="https://i.postimg.cc/gcTvv8RY/7740643.gif"
                        alt=""
                      />
                      back to top
                    </a>
                  </div>
                  <div className="ft-box bg-35">
                    <div className="ft-box-top">
                      <div className="ft-logo">
                        <Link className="logo-link" to={"/"} data-aos="zoom-in">
                          <img skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/K8qWvrFL/logo.png"
                            alt=""
                          />
                          <div className="logo-text">
                            <span className="title">Quang Phi</span>
                            <span className="sub-title">luxury piece</span>
                          </div>
                        </Link>
                      </div>
                      <div className="ft-social">
                        <ul className="social-list">
                          <li
                            className="bg-yellow"
                            data-aos="zoom-out-up"
                            data-aos-duration="600"
                          >
                            <Link to={"https://www.facebook.com/"}>
                              <i className="fa-brands fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li
                            className="bg-yellow"
                            data-aos="zoom-out-up"
                            data-aos-duration="600"
                          >
                            <Link
                              to={
                                "https://www.instagram.com/accounts/emailsignup/"
                              }
                            >
                              <i className="fa-brands fa-instagram"></i>
                            </Link>
                          </li>
                          <li
                            className="bg-yellow"
                            data-aos="zoom-out-up"
                            data-aos-duration="600"
                          >
                            <Link to={"https://www.youtube.com/"}>
                              <i className="fa-brands fa-youtube"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ft-nav">
                      <ul
                        className="line-bot"
                        data-aos="zoom-out-up"
                        data-aos-duration="600"
                      >
                        <li>
                          <Link to={'/'}>
                            <i className="fa-regular fa-gem"></i>Home
                          </Link>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-gem"></i>About Us
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-gem"></i>News
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-gem"></i>Gallery
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-gem"></i>Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* end heading left*/}
              </div>
              {/* end col left */}

              {/* col right */}
              <div className=" pd-0 col-lg-4">
                <div data-aos=" zoom-in-up" className="ft-top-right">
                  <div className="map">
                    <img skeleton="true"
                      loading="lazy"
                      src="https://i.postimg.cc/tT0Q5sNn/z4086.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* end col right */}
            </div>
          </div>
          {/* end footer top*/}

          {/* footer center */}
          <div
            className="ft-center bg-35"
            data-aos="zoom-out-up"
            data-aos-duration="600"
          >
            <div className="row">
              {/* contact */}
              <div className="col col-lg-6 col-12">
                <div className="ft-contact">
                  <ul>
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      <a href="#">
                        Phone Number <span>(+84)964 298 523</span>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a href="#">
                        Email Address <span>xx.quangphi.2.9@gmail.com</span>{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/* end contact */}
              {/* search */}
              <div className="col col-lg-3 col-12">
                <div
                  className="ft-search"
                  data-aos="zoom-out-up"
                  data-aos-duration="600"
                >
                  <div className="icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <input type="search" placeholder="Type to Search..." />
                </div>
              </div>
              {/* end search */}
              {/* address */}
              <div className="col col-lg-3 col-12">
                <div
                  className="ft-address"
                  data-aos="zoom-out-up"
                  data-aos-duration="600"
                >
                  <div className="text">
                    <p>Office Address</p>
                    <span>1/2/3 DT, TPHCM</span>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                </div>
              </div>
              {/* end address */}
            </div>
          </div>
          {/* end footer center */}

          {/* footer bottom */}
          <div className="ft-bottom bg-35">
            <div className="coppy-right">
              <i className="fa-solid fa-copyright"></i>
              <p>Coppyright By</p>
              <span>Heart</span>
            </div>
          </div>
          {/* end footer bottom */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
