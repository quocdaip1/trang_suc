import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { myContext } from "../components/context/Context";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ModalLogin from "../components/modals/modalLogin";
import ModalProduct from "../components/modals/modalProduct";
import ItemSlick from "../components/slick/ItemSlick";
import "../style/productPage.scss";
import usePagination from "../hooks/usePagination";
import Pagination from "@mui/material/Pagination";

const ProductPage = () => {
  /* const dataRedux = useSelector((state) => state.data); */
  const mContext = useContext(myContext);
  //pagination
  const list = [];

  const [totalPages, startPg, endPg, currenPg, displayPg] = usePagination(
    10,
    mContext.fullProduct.length
  );

  (() => {
    for (let i = startPg; i < endPg; i++) {
      list.push(mContext.fullProduct[i]);
    }
    return list;
  })();

  //end

  return (
    <div id="#product-page" className="bg-black">
      <Header />
      <Footer />
      <div id="main">
        <section className="shops">
          <div className="container">
            <div className="row">
              <div className="col col-lg-4 col-md-10 col-sm-10"></div>
              <div className="col col-lg-8 col-md-10">
                <div className="shop-wraper">
                  <div className="heading">
                    <p>
                      showing <span>1</span> to{" "}
                      <span>
                        9 <span>of </span>90
                      </span>{" "}
                      result
                    </p>
                  </div>
                  <div className="product-wrapper">
                    <div className="row">
                      {list
                        ? list.map((item) => {
                            return (
                              <div className="col col-lg-4" key={uuid()}>
                                <ItemSlick item={item} />
                              </div>
                            );
                          })
                        : ""}
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
    </div>
  );
};

export default ProductPage;
