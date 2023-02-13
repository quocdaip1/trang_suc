import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import IndexPage from "./pages/IndexPage";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/productPage";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/Reducer/cartSlice";
import useFetchData from "./hooks/useFetchData";
import { myContext } from "./components/context/Context";
import { useEffect, useState } from "react";
import CartPage from "./pages/cartPage";
import { getData } from "./redux/Reducer/dataSlice";
function App() {
  //fulldata redux
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getData());
  }, []);

  const dataRedux = useSelector(state => state.data);
  //end

  //add-to cart
  const handleAddtoCart = (item, quantity) => {
    if (quantity && item.availabel) {
      dispath(addToCart({ item, quantity }));
      return;
    } else if (quantity === 0) {
      window.confirm("Error!! Enter a quantity other than 0 !!");
    } else window.confirm("Error!! Availabel: Sold Out !!");
  };
  //end

  //product state
  const [detailsProduct, setDetailsProduct] = useState("");
  const [idProductItem, setIdProductItem] = useState("");
  useEffect(() => {
    const item = dataRedux.data.find((item) => {
      return item.id === idProductItem;
    });
    setDetailsProduct(item);
  }, [idProductItem]);
  //end

  //modal state
  const [modalProductOpen, setModalProductOpen] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  //end

  //dom
  window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
  //end

  return (
    <myContext.Provider
      value={{
        item: detailsProduct,
        handleAddtoCart,
        modalLoginOpen,
        setModalLoginOpen,
        idProductItem,
        setIdProductItem,
        modalProductOpen,
        setModalProductOpen,
        setDetailsProduct
      }}
    >
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/jewelry/:category" element={<ProductPage />} />
        <Route path="/jwelry/cart" element={<CartPage />} />
      </Routes>
    </myContext.Provider>
  );
}

export default App;
