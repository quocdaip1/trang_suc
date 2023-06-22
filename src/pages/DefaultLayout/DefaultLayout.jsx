import LazyLoad from "react-lazyload";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ModalLogin from "../../components/modals/modalLogin";
import ModalProduct from "../../components/modals/modalProduct";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <LazyLoad offset={100} placeholder={"Loading..."}>
        <Header />
        {children}
        <ModalLogin />
        <ModalProduct />
        <Footer />
      </LazyLoad>
    </>
  );
};

export default DefaultLayout;
