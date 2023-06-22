import { Footer } from "antd/es/layout/layout";
import Header from "../../components/header/Header";
import ModalLogin from "../../components/modals/modalLogin";
import ModalProduct from "../../components/modals/modalProduct";

export default DefaultLayout = (children) => {
  return (
    <>
      <Header />
      {children}
      <ModalLogin />
      <ModalProduct />
      <Footer />
    </>
  );
};
