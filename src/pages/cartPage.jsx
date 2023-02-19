import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ModalLogin from "../components/modals/modalLogin";
import ModalProduct from "../components/modals/modalProduct";
import CartItem from "../components/slick/CartItem";
import "../style/pages/cartPage.scss";
import { DatePicker, Form } from "antd";
import { useState } from "react";

const CartPage = () => {
  //cart redux
  const cartRedux = useSelector((state) => state.cart);
  //

  //breakpoint custom
  const breakpoint = [
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
  ];
  //end

  //payment radio state
  const [radioActive, setRadioActive] = useState("");
  //end

  return (
    <div id="cart-page" className="bg-black">
      <Header />
      <div id="main">
        <div className="container">
          <div className="cart-wraper">
            <div className="cart-header">
              <Link className="btn main-btn" to={"/jewelry/shop"}>
                <span>buy more</span>
              </Link>
              <div className="sub-total">
                sub-total:
                <span>${cartRedux.total}</span>
              </div>
            </div>
            {cartRedux.cart.length ? (
              <div className="cart-content">
                <div className="row">
                  <div className="col col-lg-5">
                    <div className="cart-product">
                      <div className="title">
                        <span>cart info</span>
                      </div>
                      <div className="cart-inner scroll-custom">
                        {cartRedux.cart.map((item) => {
                          return <CartItem key={uuid()} item={item} />;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-7">
                    <div className="customer-info">
                      <div className="title">
                        <span>customer information</span>
                      </div>
                      <div className="form-wraper bg-35">
                        <form action="">
                          <div className="form-row sex">
                            <div className="group-radio">
                              <input type="radio" name="sex" id="male" />
                              <label htmlFor="male">Male</label>
                            </div>

                            <div className="group-radio">
                              <input type="radio" name="sex" id="female" />
                              <label htmlFor="female">FeMale</label>
                            </div>
                          </div>

                          <div className="customer-info">
                            <div className="form-row justify-content-between">
                              <input
                                type="text"
                                placeholder="First and Last name (required)"
                              />
                              <input
                                type="text"
                                placeholder="Phone number (required)"
                              />
                            </div>

                            <div className="form-row">
                              <label htmlFor="">birthday:</label>
                              <Form.Item>
                                <DatePicker />
                              </Form.Item>
                            </div>
                            <input type="text" placeholder="Email" />

                            <input type="text" placeholder="Address" />
                            <div className="form-row">
                              <label htmlFor="">Note:</label>
                              <textarea
                                name=""
                                id=""
                                placeholder="Note:"
                                rows="8"
                              ></textarea>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="payment">
                      <div className="payment-text">
                        <div className="title">
                          <span>payment</span>
                        </div>
                        <div className="group-total">
                          <div className="sub-total pb-2">
                            Sub-Total: <span>${cartRedux.total}</span>
                          </div>
                          <div className="deliver pb-2">
                            Transportation costs: <span>Free</span>
                          </div>
                          <div className="total pt-3">
                            Total: <span>${cartRedux.total}</span>
                          </div>
                        </div>
                      </div>
                      <div className="payment-wraper">
                        <div
                          className={`payment-item ${
                            radioActive == "r1" ? "active" : ""
                          }`}
                        >
                          <input
                            onChange={(e) => setRadioActive("r1")}
                            type="radio"
                            name="zz"
                            id="on-delivery"
                          />
                          <label htmlFor="on-delivery">
                            {" "}
                            Payment on Delivery{" "}
                            <span>Free Shipping Nationwide</span>
                          </label>
                        </div>

                        <div
                          className={`payment-item ${
                            radioActive == "r2" ? "active" : ""
                          }`}
                        >
                          <input
                            onChange={(e) => setRadioActive("r2")}
                            type="radio"
                            name="zz"
                            id="visa"
                          />
                          <label htmlFor="visa">
                            {" "}
                            Payment by Visa{" "}
                            <span>Free Shipping Nationwide</span>
                          </label>
                        </div>
                      </div>
                      <button className="btn main-btn rs-btn">
                        <span>accept</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="cart-empty">
                <img loading="lazy"
                  src="https://i.postimg.cc/50LvyvPz/empty-cart.png"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <ModalLogin />
      <ModalProduct />
    </div>
  );
};

export default CartPage;
