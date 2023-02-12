import { useContext } from "react";
import { componentDidMount } from "../../service/utils";
import { myContext } from "../context/Context";

const ItemSlick = (props) => {
  const mContext = useContext(myContext);
  const { setModalProductOpen, setIdProductItem, handleAddtoCart } = mContext;

  const { item } = props;
  return (
    <div onClick={() => setIdProductItem(item.id)} className="item">
      <div className="item-wraper ">
        <div className="thumb imagesiny">
          <img src={item.image} alt="" />
          <div className="sale">
            <span className={`mb-3 ${item.onsale ? "active" : ""}`}>sale</span>
            <span className={`discount ${item.onsale ? "active" : ""}`}>
              {item.saleper}
            </span>
          </div>
          <ul className="btn-list">
            <li onClick={() => handleAddtoCart(item, 1)}>
              <i className="fa-solid fa-bag-shopping"></i>
            </li>
            <li
              onClick={() => {
                setModalProductOpen(true);
                componentDidMount();
              }}
            >
              <i className="fa-solid fa-eye"></i>
            </li>
          </ul>
        </div>
        <div className="info bg-35">
          <h1 className="name ellipsis">{item.name}</h1>
          <div className="price">
            <span className="new-price">${item.price}</span>
            <span className={`old-price ${item.onsale ? "active" : ""}`}>
              ${item.oldprice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemSlick;
