import { memo, useContext, useState } from "react";
import { componentUnmount } from "../../service/utils";
import "../../style//components/modal.scss";
import { myContext } from "../context/Context";

const ModalProduct = (props) => {
  const mContext = useContext(myContext);
  const { item, handleAddtoCart, modalProductOpen, setModalProductOpen} =
    mContext;
  const [quantity, setQuantity] = useState(1);
  return (
    <div id="modal-product">
      <div className={`modal-wraper ${modalProductOpen ? "active" : ""}`}>
        {item ? (
          <>
            <div className="overlay"></div>
            <div className="modal-content bg-35 scroll-custom">
              <button
                onClick={() => {
                  setModalProductOpen(false);
                  componentUnmount();
                }}
                className="close-btn rs-btn"
              >
                <i className="fa-solid fa-x"></i>
              </button>
              <div className="container-fluit">
                <div className="row">
                  <div className="col col-lg-5 col-md-10 col-12">
                    <div className="detail-img bg-black">
                      <img skeleton="true" loading="lazy" src={item.image} alt="" />
                    </div>
                  </div>
                  <div className="col col-lg-7 col-md-10 col-12">
                    <div className="detail-content">
                      <h3 className="product-title mb-20">{item.name}</h3>

                      <div className="product-rating mb-20">
                        <span className="text-yellow">
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span className="text-yellow">
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span className="text-yellow">
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span className="text-yellow">
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span className="rate-quantity">
                          {item.rating} Rating
                        </span>
                      </div>

                      <div className="product-price price mb-20">
                        <span className="new-price">${item.price}</span>
                        <span
                          className={`old-price ${item.onsale ? "active" : ""}`}
                        >
                          ${item.oldprice}
                        </span>
                      </div>

                      <div className="other-info mb-20">
                        <div className="info-item">
                          <h6>Availability:</h6>
                          <span
                            className={`ms-2 ${
                              item.availabel ? "" : "text-red"
                            }`}
                          >
                            {item.availabel ? "In Stock" : "Sold Out"}
                          </span>
                        </div>
                        <div className="info-item">
                          <h6 className="ms-5">SKU:</h6>
                          <span className="ms-2">{item.sku}</span>
                        </div>
                      </div>

                      <div className="short-des mb-20">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                        </p>
                      </div>

                      <div className="color mb-20">
                        <label htmlFor="#">Material:</label>
                        <div className="color-box">
                          <span>Gold</span>
                          <span>Diamond</span>
                          <span>Silver</span>
                          <span>Stone</span>
                        </div>
                      </div>

                      <div className="add-to-cart">
                        <div className="quantity-box">
                          <button
                            onClick={() =>
                              quantity ? setQuantity(quantity - 1) : ""
                            }
                            className="minus rs-btn"
                          >
                            -
                          </button>
                          <div className="number">
                            <span>{quantity}</span>{" "}
                          </div>
                          <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="plus rs-btn"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleAddtoCart(item, quantity)}
                          className="add-btn btn border-btn"
                        >
                          <span>add to cart</span>
                        </button>
                      </div>
                      <div className="tags mt-20">
                        <h6 className="m-0">Tags:</h6>
                        <ul>
                          <li>
                            <a href="#">rings</a>
                          </li>
                          <li>
                            <a href="#">necklaces</a>
                          </li>
                          <li>
                            <a href="#">bracelet</a>
                          </li>
                        </ul>
                      </div>

                      <div className="tags mt-20">
                        <h6 className="m-0">Top Search:</h6>
                        <ul>
                          <li>
                            <a href="#">diamond rings</a>
                          </li>
                          <li>
                            <a href="#">stond earing</a>
                          </li>
                          <li>
                            <a href="#">gold bracelet</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default memo(ModalProduct);
