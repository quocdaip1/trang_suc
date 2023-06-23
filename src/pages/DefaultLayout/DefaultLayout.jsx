// import LazyLoad from "react-lazyload";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ModalLogin from "../../components/modals/modalLogin";
import ModalRegister from "../../components/modals/modalRegister";
import ModalProduct from "../../components/modals/modalProduct";
import { myContext } from "../../components/context/Context";


import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Reducer/cartSlice";
import { getData } from "../../redux/Reducer/dataSlice";
import React, { useEffect, useState } from "react";


const DefaultLayout = ({ children }) => {
   //fulldata redux
   const dispath = useDispatch();

   useEffect(() => {
     dispath(getData());
   }, []);
 
   const dataRedux = useSelector((state) => state.data);
   //end
 
   //add-to cart
   const handleAddtoCart = (item, quantity) => {
     if (userLogin) {
       if (quantity && item.availabel) {
         dispath(addToCart({ item, quantity }));
         return;
       } else if (quantity == 0) {
         window.confirm("Error!! Enter a quantity other than 0 !!");
       } else window.confirm("Error!! Availabel: Sold Out !!");
     } else {
       window.alert("Please Login First");
       setModalLoginOpen(true);
     }
   };
   //end
 
   //product state
   const [detailsProduct, setDetailsProduct] = useState("");
   const [idProductItem, setIdProductItem] = useState("");
   useEffect(() => {
     const item = dataRedux.data.find((item) => {
       return item.id == idProductItem;
     });
     setDetailsProduct(item);
   }, [idProductItem]);
   //end
 
   //modal state
   const [userLogin, setUserLogin] = useState(
     localStorage.getItem("user")
       ? JSON.parse(localStorage.getItem("user"))
       : undefined
   );
   const [modalProductOpen, setModalProductOpen] = useState(false);
   const [modalLoginOpen, setModalLoginOpen] = useState(false);
   const [modalRegisterOpen, setModalRegisterOpen] = useState(false);
 
   //end
 
   //loading
   const [loading, setLoading] = useState(true);
   //end
 
  return (
    <>
    <myContext.Provider
      value={{
        item: detailsProduct,
        handleAddtoCart,
        modalLoginOpen,
        setModalLoginOpen,
        modalRegisterOpen,
        setModalRegisterOpen,
        idProductItem,
        setIdProductItem,
        modalProductOpen,
        setModalProductOpen,
        setDetailsProduct,
        loading,
        setLoading,
        userLogin,
        setUserLogin,
      }}
    >
      {/* <LazyLoad offset={100} placeholder={"Loading..."}> */}
        <Header />
        {children}
        <ModalLogin />
        <ModalRegister/>
        <ModalProduct />
        <Footer />
      {/* </LazyLoad> */}
      </myContext.Provider>
    </>
  );
};

export default DefaultLayout;
