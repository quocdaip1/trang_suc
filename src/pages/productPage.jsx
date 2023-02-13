import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ModalLogin from "../components/modals/modalLogin";
import ModalProduct from "../components/modals/modalProduct";
import ItemSlick from "../components/slick/ItemSlick";
import "../style/pages/productPage.scss"
import usePagination from "../hooks/usePagination";
import Pagination from "@mui/material/Pagination";
import myAxios from "../service/axios";
import { useParams } from "react-router-dom";
import RangeSlider from "../components/rangeSlide/RangeSlide";
import Loading from "../components/loading/Loading";

const ProductPage = () => {
  const [fullProduct, setFullproduct] = useState([]);
  const params = useParams();
  const [keyParams, setkeyParams] = useState(
    params.category === "shop" || params.category === "" ? "" : params.category
  );

  const fetchData = async () => {
    try {
      const queryParams = {
        search: keyParams,
      };

      const data = await myAxios.get("jewelry", {
        params: queryParams,
      });
      setFullproduct(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [params]);
  //pagination
  const list = [];

  const [totalPages, startPg, endPg, displayPg] = usePagination(
    10,
    fullProduct.length
  );

  (() => {
    for (let i = startPg; i < endPg; i++) {
      const newp = { ...fullProduct[i] };
      list.push(newp);
    }
    return list;
  })();
  //end

  const [filterAct, setFilterAct] = useState("");
  const handleActFilter = (fil) => {
    if (filterAct == fil) {
      setFilterAct("");
      return;
    }
    setFilterAct(fil);
  };

  return (
    <div id="product-page" className="bg-black">
      {fullProduct.length ? (
        <>
          <Header />
          <div id="main">
            <section className="shops">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-4 col-md-10 col-sm-10 col-12">
                    <div className="filter-wraper">
                      <div className="heading">
                        <button className="btn main-btn rs-btn">
                          <span>clear filter</span>
                        </button>
                      </div>
                      <div className="filter-item category bg-35">
                        <div className="title">
                          <h2 data-text="&nbsp;&nbsp;filter&nbsp;by&nbsp;category&nbsp;&nbsp;">
                            &nbsp;&nbsp;filter&nbsp;by&nbsp;category&nbsp;&nbsp;
                          </h2>
                          <div
                            onClick={() => handleActFilter("cate")}
                            className={`icon ${
                              filterAct == "cate" ? "active" : ""
                            }`}
                          >
                            <i className="fa-solid fa-angle-right"></i>
                          </div>
                        </div>
                        <div
                          className={`content ${
                            filterAct == "cate" ? "active" : ""
                          }`}
                        >
                          <form action="">
                            <label htmlFor="cate1">
                              <input type="checkbox" name="cate" id="cate1" />
                              <span className="custom-checkbox"></span>
                              ring
                            </label>
                            <label htmlFor="cate2">
                              <input type="checkbox" name="cate" id="cate2" />
                              <span className="custom-checkbox"></span>
                              earrings
                            </label>
                            <label htmlFor="cate3">
                              <input type="checkbox" name="cate" id="cate3" />
                              <span className="custom-checkbox"></span>
                              bracelet
                            </label>
                            <label htmlFor="cate4">
                              <input type="checkbox" name="cate" id="cate4" />
                              <span className="custom-checkbox"></span>
                              necklace
                            </label>
                          </form>
                        </div>
                      </div>

                      <div className="filter-item bg-35">
                        <div className="title">
                          <h2 data-text="&nbsp;&nbsp;filter&nbsp;by&nbsp;price &nbsp;">
                            &nbsp;&nbsp;filter&nbsp;by&nbsp;price &nbsp;
                          </h2>
                          <div
                            onClick={() => handleActFilter("range")}
                            className={`icon ${
                              filterAct == "range" ? "active" : ""
                            }`}
                          >
                            <i className="fa-solid fa-angle-right"></i>
                          </div>
                        </div>
                        <div
                          className={`content ${
                            filterAct == "range" ? "active" : ""
                          }`}
                        >
                          <RangeSlider />
                        </div>
                      </div>

                      <div className="filter-item bg-35">
                        <div className="title">
                          <h2 data-text="&nbsp;&nbsp;filter&nbsp;by&nbsp;material&nbsp;&nbsp;">
                            &nbsp;&nbsp;filter&nbsp;by&nbsp;material&nbsp;&nbsp;
                          </h2>
                          <div
                            onClick={() => handleActFilter("mate")}
                            className={`icon ${
                              filterAct == "mate" ? "active" : ""
                            }`}
                          >
                            <i className="fa-solid fa-angle-right"></i>
                          </div>
                        </div>
                        <div
                          className={`content ${
                            filterAct == "mate" ? "active" : ""
                          }`}
                        >
                          <form action="">
                            <label htmlFor="materia1">
                              <input
                                type="checkbox"
                                name="cate"
                                id="materia1"
                              />
                              <span className="custom-checkbox"></span>
                              diamond
                            </label>
                            <label htmlFor="material2">
                              <input
                                type="checkbox"
                                name="cate"
                                id="material2"
                              />
                              <span className="custom-checkbox"></span>
                              gold
                            </label>
                            <label htmlFor="material3">
                              <input
                                type="checkbox"
                                name="cate"
                                id="material3"
                              />
                              <span className="custom-checkbox"></span>
                              white gold
                            </label>
                            <label htmlFor="material4">
                              <input
                                type="checkbox"
                                name="cate"
                                id="material4"
                              />
                              <span className="custom-checkbox"></span>
                              silver
                            </label>
                          </form>
                        </div>
                      </div>

                      <div className="filter-item bg-35">
                        <div className="title">
                          <h2 data-text="&nbsp;&nbsp;filter&nbsp;by&nbsp;purify&nbsp;of&nbsp;gold&nbsp;&nbsp;">
                            &nbsp;&nbsp;filter&nbsp;by&nbsp;purify&nbsp;of&nbsp;gold&nbsp;&nbsp;
                          </h2>
                          <div
                            onClick={() => handleActFilter("puri")}
                            className={`icon ${
                              filterAct == "puri" ? "active" : ""
                            }`}
                          >
                            <i className="fa-solid fa-angle-right"></i>
                          </div>
                        </div>
                        <div
                          className={`content ${
                            filterAct == "puri" ? "active" : ""
                          }`}
                        >
                          <form action="">
                            <label htmlFor="purify1">
                              <input type="checkbox" name="cate" id="purify1" />
                              <span className="custom-checkbox"></span>
                              24K
                            </label>
                            <label htmlFor="purify2">
                              <input type="checkbox" name="cate" id="purify2" />
                              <span className="custom-checkbox"></span>
                              18K
                            </label>
                            <label htmlFor="purify3">
                              <input type="checkbox" name="cate" id="purify3" />
                              <span className="custom-checkbox"></span>
                              14K
                            </label>
                            <label htmlFor="purify4">
                              <input type="checkbox" name="cate" id="purify4" />
                              <span className="custom-checkbox"></span>
                              10K
                            </label>
                          </form>
                        </div>
                      </div>

                      <div className="filter-item bg-35">
                        <div className="title">
                          <h2 data-text="&nbsp;&nbsp;popular&nbsp;tags&nbsp;&nbsp;">
                            &nbsp;&nbsp;popular&nbsp;tags&nbsp;&nbsp;
                          </h2>
                          <div
                            onClick={() => handleActFilter("tag")}
                            className={`icon ${
                              filterAct == "tag" ? "active" : ""
                            }`}
                          >
                            <i className="fa-solid fa-angle-right"></i>
                          </div>
                        </div>
                        <div
                          className={`content ${
                            filterAct == "tag" ? "active" : ""
                          }`}
                        >
                          <ul>
                            <li>
                              <a href="#">diamond ring</a>
                            </li>
                            <li>
                              <a href="#">earrings</a>
                            </li>
                            <li>
                              <a href="#">necklace</a>
                            </li>
                            <li>
                              <a href="#">bracelet</a>
                            </li>
                            <li>
                              <a href="#">wedding ring</a>
                            </li>
                            <li>
                              <a href="#">silver bracelet</a>
                            </li>
                            <li>
                              <a href="#">18k ring</a>
                            </li>
                            <li>
                              <a href="#">bangles</a>
                            </li>
                            <li>
                              <a href="#">24k earrings</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-8 col-md-10 col-12">
                    <div className="shop-wraper">
                      <div className="heading">
                        <p>
                          showing
                          <span>{startPg + 1}</span>
                          to
                          <span>{endPg + 1}</span>
                          of
                          <span>{fullProduct.length}</span>
                          Result
                        </p>
                      </div>
                      <div className="product-wrapper">
                        <div className="row">
                          {list.map((item) => {
                            return (
                              <div
                                className="col col-lg-4 col-md-6 col-sm-6"
                                key={uuid()}
                              >
                                <ItemSlick item={item} />
                              </div>
                            );
                          })}
                          <Pagination
                            count={totalPages}
                            onChange={(event, value) => displayPg(value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <ModalLogin />
          <ModalProduct />
          <Footer />
        </>
      ) : (
        <div className="loading">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
