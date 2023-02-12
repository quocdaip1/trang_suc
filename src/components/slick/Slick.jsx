import Slider from "react-slick";
import "../../style/slick.scss";

const Slick = (props) => {
  const { show, row,custom, children } = props;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: show,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    rows: row,
    responsive: custom,
  };
  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

export default Slick;
