import { useDispatch, useSelector } from "react-redux";
import {
  addMoreProduct,
  deleteFromCart,
  removeFromCart,
} from "../../redux/Reducer/cartSlice";
import "../../style/components/cartItem.scss";
const CartItem = (props) => {
  const { item } = props;
  const cartRedux = useSelector((state) => state.cart);
  const dispath = useDispatch();

  const handleMinusItemCart = (item) => {
    dispath(removeFromCart(item));
  };
  const handlePlusItemCart = (item, quantity) => {
    dispath(addMoreProduct(item, quantity));
  };

  const handleDeleteItemCart = (item) => {
    dispath(deleteFromCart(item));
  };

  return (
    <li className="cart-item">
      <div className="img">
        <img loading="lazy" src={item.image} alt="" />
      </div>
      <div className="content">
        <p className="name ellipsis">
          <a href="#">{item.name}</a>
        </p>
        <p className="sku">
          <span className="me-2">sku:</span>
          {item.sku}
        </p>
        <div className="quantity-box">
          <span className="price">
            <span className="me-2">price:</span>${item.price}
          </span>
          <span className="multi">x</span>
          <div className="quantity ">
            <span className="text me-2">quantity:</span>
            <button
              onClick={() => {
                handleMinusItemCart(item);
              }}
              className="minus"
            >
              -
            </button>
            <span className="number">{item.quantity}</span>
            <button
              onClick={() => {
                handlePlusItemCart(item, 1);
              }}
              className="plus"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          handleDeleteItemCart(item);
        }}
        className="delete rs-btn"
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};
export default CartItem;
