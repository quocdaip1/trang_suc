import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ModalLogin from "../components/modals/modalLogin";
import ModalProduct from "../components/modals/modalProduct";
import ItemSlick from "../components/slick/ItemSlick";
import "../style/pages/productPage.scss";
import usePagination from "../hooks/usePagination";
import Pagination from "@mui/material/Pagination";
import myAxios from "../service/axios";
import { useParams } from "react-router-dom";
import RangeSlider from "../components/rangeSlide/RangeSlide";
import Loading from "../components/loading/Loading";
import { checkExist, componentUnmount } from "../service/utils";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload";

const ProductPage = () => {
  //data fetch with params
  const [fullProduct, setFullproduct] = useState([]);
  const dataRedux = useSelector((state) => state.data.data);

  const params = useParams();
  const [keyParams, setkeyParams] = useState(
    params.category == "shop" || params.category == "" ? "" : params.category
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
      setResult(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    componentUnmount();
    fetchData();
  }, [params]);
  //end

  //filter
  const [filterAct, setFilterAct] = useState("");
  const handleActFilter = (fil) => {
    if (filterAct == fil) {
      setFilterAct("");
      return;
    }
    setFilterAct(fil);
  };

  const [keyCate, setKeyCate] = useState([]);
  const [keyMate, setKeyMate] = useState([]);
  const [keyPurify, setKeyPurify] = useState([]);
  const [keyPrice, setKeyPrice] = useState([0, 10000]);
  const [result, setResult] = useState([]);

  const handleFilter = () => {
    const filteredProducts = fullProduct.filter(
      (item) =>
        (keyCate.length
          ? keyCate.some((cat) =>
              item.name.toLowerCase().includes(cat.toLowerCase())
            )
          : true) &&
        (keyMate.length
          ? keyMate.some((mat) =>
              item.name.toLowerCase().includes(mat.toLowerCase())
            )
          : true) &&
        (keyPurify.length
          ? keyPurify.some((pur) =>
              item.name.toLowerCase().includes(pur.toLowerCase())
            )
          : true) &&
        item.price >= (keyPrice[0] ?? 0) &&
        item.price <= (keyPrice[1] ?? Infinity)
    );
    setResult(filteredProducts);
  };

  useEffect(() => {
    handleFilter();
  }, [keyCate, keyMate, keyPurify, keyPrice]);

  const handleClearFilter = () => {
    setKeyCate([]);
    setKeyMate([]);
    setKeyPurify([]);
    setKeyPrice([0, 10000]);
  };

  const handleChecked = (x, y) => {
    if (x.includes(y)) {
      return true;
    }
    return false;
  };

  //

  //pagination
  const list = [];

  const [totalPages, startPg, endPg, displayPg] = usePagination(
    12,
    result.length
  );

  (() => {
    for (
      let i = startPg;
      i < (result.length < 10 ? result.length : endPg);
      i++
    ) {
      const newp = { ...result[i] };
      list.push(newp);
    }
    return list;
  })();
  //end
  return (
    <LazyLoad offset={100} placeholder={"Loading..."}>
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
                          <button
                            onClick={handleClearFilter}
                            className="btn main-btn rs-btn"
                          >
                            <span>clear filter</span>
                          </button>
                        </div>

                        <div
                          className={`filter-item category bg-35 ${
                            filterAct == "cate" ? "active" : ""
                          }`}
                        >
                          <div
                            onClick={() => handleActFilter("cate")}
                            className="title"
                          >
                            <h2 data-text="&nbsp;&nbsp;filter&nbsp;by&nbsp;category&nbsp;&nbsp;">
                              &nbsp;&nbsp;filter&nbsp;by&nbsp;category&nbsp;&nbsp;
                            </h2>
                            <div
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
                                <input
                                  checked={
                                    handleChecked(keyCate, "Diamond Ring")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyCate,
                                      setKeyCate
                                    );
                                  }}
                                  type="checkbox"
                                  name="Diamond Ring"
                                  id="cate1"
                                />
                                <span className="custom-checkbox"></span>
                                ring
                              </label>
                              <label htmlFor="cate2">
                                <input
                                  checked={
                                    handleChecked(keyCate, "Earrings")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyCate,
                                      setKeyCate
                                    );
                                  }}
                                  type="checkbox"
                                  name="Earrings"
                                  id="cate2"
                                />
                                <span className="custom-checkbox"></span>
                                earrings
                              </label>
                              <label htmlFor="cate3">
                                <input
                                  checked={
                                    handleChecked(keyCate, "Bracelet")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyCate,
                                      setKeyCate
                                    );
                                  }}
                                  type="checkbox"
                                  name="Bracelet"
                                  id="cate3"
                                />
                                <span className="custom-checkbox"></span>
                                bracelet
                              </label>
                              <label htmlFor="cate4">
                                <input
                                  checked={
                                    handleChecked(keyCate, "Necklace")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyCate,
                                      setKeyCate
                                    );
                                  }}
                                  type="checkbox"
                                  name="Necklace"
                                  id="cate4"
                                />
                                <span className="custom-checkbox"></span>
                                necklace
                              </label>
                            </form>
                          </div>
                        </div>

                        <div
                          className={`filter-item bg-35 ${
                            filterAct == "range" ? "active" : ""
                          }`}
                        >
                          <div
                            onClick={() => handleActFilter("range")}
                            className="title"
                          >
                            <h2 data-text="&nbsp;&nbsp;filter&nbsp;by&nbsp;price &nbsp;">
                              &nbsp;&nbsp;filter&nbsp;by&nbsp;price &nbsp;
                            </h2>
                            <div
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
                            <RangeSlider
                              keyPrice={keyPrice}
                              setKeyPrice={setKeyPrice}
                            />
                          </div>
                        </div>

                        <div
                          className={`filter-item bg-35 ${
                            filterAct == "mate" ? "active" : ""
                          }`}
                        >
                          <div
                            onClick={() => handleActFilter("mate")}
                            className="title"
                          >
                            <h2 data-text="&nbsp;&nbsp;filter&nbsp;by&nbsp;material&nbsp;&nbsp;">
                              &nbsp;&nbsp;filter&nbsp;by&nbsp;material&nbsp;&nbsp;
                            </h2>
                            <div
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
                                  checked={
                                    handleChecked(keyMate, "diamond")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyMate,
                                      setKeyMate
                                    );
                                  }}
                                  type="checkbox"
                                  name="diamond"
                                  id="materia1"
                                />
                                <span className="custom-checkbox"></span>
                                diamond
                              </label>
                              <label htmlFor="material2">
                                <input
                                  checked={
                                    handleChecked(keyMate, "gold")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyMate,
                                      setKeyMate
                                    );
                                  }}
                                  type="checkbox"
                                  name="gold"
                                  id="material2"
                                />
                                <span className="custom-checkbox"></span>
                                gold
                              </label>
                              <label htmlFor="material3">
                                <input
                                  checked={
                                    handleChecked(keyMate, "white gold")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyMate,
                                      setKeyMate
                                    );
                                  }}
                                  type="checkbox"
                                  name="white gold"
                                  id="material3"
                                />
                                <span className="custom-checkbox"></span>
                                white gold
                              </label>
                              <label htmlFor="material4">
                                <input
                                  checked={
                                    handleChecked(keyMate, "silver")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyMate,
                                      setKeyMate
                                    );
                                  }}
                                  type="checkbox"
                                  name="silver"
                                  id="material4"
                                />
                                <span className="custom-checkbox"></span>
                                silver
                              </label>
                            </form>
                          </div>
                        </div>

                        <div
                          className={`filter-item bg-35 ${
                            filterAct == "puri" ? "active" : ""
                          }`}
                        >
                          <div
                            onClick={() => handleActFilter("puri")}
                            className="title"
                          >
                            <h2 data-text="&nbsp;&nbsp;filter&nbsp;by&nbsp;purify&nbsp;of&nbsp;gold&nbsp;&nbsp;">
                              &nbsp;&nbsp;filter&nbsp;by&nbsp;purify&nbsp;of&nbsp;gold&nbsp;&nbsp;
                            </h2>
                            <div
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
                                <input
                                  checked={
                                    handleChecked(keyPurify, "24K")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyPurify,
                                      setKeyPurify
                                    );
                                  }}
                                  type="checkbox"
                                  name="24K"
                                  id="purify1"
                                />
                                <span className="custom-checkbox"></span>
                                24K
                              </label>
                              <label htmlFor="purify2">
                                <input
                                  checked={
                                    handleChecked(keyPurify, "18K")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyPurify,
                                      setKeyPurify
                                    );
                                  }}
                                  type="checkbox"
                                  name="18K"
                                  id="purify2"
                                />
                                <span className="custom-checkbox"></span>
                                18K
                              </label>
                              <label htmlFor="purify3">
                                <input
                                  checked={
                                    handleChecked(keyPurify, "14K")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyPurify,
                                      setKeyPurify
                                    );
                                  }}
                                  type="checkbox"
                                  name="14K"
                                  id="purify3"
                                />
                                <span className="custom-checkbox"></span>
                                14K
                              </label>
                              <label htmlFor="purify4">
                                <input
                                  checked={
                                    handleChecked(keyPurify, "10K")
                                      ? true
                                      : false
                                  }
                                  onChange={(e) => {
                                    checkExist(
                                      e.target.name,
                                      keyPurify,
                                      setKeyPurify
                                    );
                                  }}
                                  type="checkbox"
                                  name="10K"
                                  id="purify4"
                                />
                                <span className="custom-checkbox"></span>
                                10K
                              </label>
                            </form>
                          </div>
                        </div>

                        <div
                          className={`filter-item bg-35 ${
                            filterAct == "tag" ? "active" : ""
                          }`}
                        >
                          <div
                            onClick={() => handleActFilter("tag")}
                            className="title"
                          >
                            <h2 data-text="&nbsp;&nbsp;popular&nbsp;tags&nbsp;&nbsp;">
                              &nbsp;&nbsp;popular&nbsp;tags&nbsp;&nbsp;
                            </h2>
                            <div
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
                        <div
                          className={`heading ${result.length ? "active" : ""}`}
                        >
                          <p>
                            showing
                            <span>{startPg + 1}</span>
                            to
                            <span>
                              {result.length >= 10 ? endPg : result.length}
                            </span>
                            of
                            <span>{result.length}</span>
                            Result
                          </p>
                        </div>
                        <div className="product-wrapper">
                          <div className="row">
                            {result.length ? (
                              list.map((item) => {
                                return (
                                  <div
                                    className="col col-lg-4 col-md-6 col-sm-6 col-12"
                                    key={uuid()}
                                  >
                                    <ItemSlick item={item} />
                                  </div>
                                );
                              })
                            ) : (
                              <div className="not-found">
                                <img
                                  skeleton="true"
                                  src="https://i.postimg.cc/6p6WNFjD/6195678.png"
                                  alt=""
                                />
                              </div>
                            )}
                            <Pagination
                              count={totalPages}
                              onChange={(event, value) => {
                                displayPg(value);
                              }}
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
    </LazyLoad>
  );
};

export default ProductPage;
