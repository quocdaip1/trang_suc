import "../../style/components/header.scss";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { useContext, useEffect, useState } from "react";
import myAxios from "../../service/axios";
import ItemSlick from "../slick/ItemSlick";
import { Link, NavLink } from "react-router-dom";
import Loading from "../loading/Loading";
import Slick from "../slick/Slick";
import { componentDidMount, componentUnmount } from "../../service/utils";
import { myContext } from "../context/Context";
import CartItem from "../slick/CartItem";

export default function () {
  const mContext = useContext(myContext);
  const { setModalLoginOpen } = mContext;

  //cart redux
  const cartRedux = useSelector((state) => state.cart);
  const dataRedux = useSelector((state) => state.data);
  //end

  //search
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState([]);
  const [listSearch, setListSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchData = async (text) => {
    try {
      if (searchText.length !== 0) {
        setLoading(true);

        const queryParams = {
          search: text,
        };
        const dataValue = await myAxios.get("jewelry", {
          params: queryParams,
        });
        setListSearch(dataValue.data);
        setLoading(false);
        return;
      }
      setListSearch([]);
    } catch (error) {}
  };

  useEffect(() => {
    const timeCallAPI = setTimeout(handleSearchData(searchText), 500);
    return () => {
      clearTimeout(timeCallAPI);
    };
  }, [searchText]);
  //end search

  //menu mobile
  const [openMenuMobile, setOpenMenumobile] = useState(false);
  const [cateActive, setCateActive] = useState(false);
  const handleCateActive = () => {
    if (cateActive) {
      setCateActive(false);
      return;
    }
    setCateActive(true);
  };
  //end

  //header tabs
  const [tab, setTab] = useState("Ring");
  const cate = dataRedux.data.filter((item) => {
    return (
      item.onsale &&
      item.name /* .toLowerCase() */
        .includes(tab)
    );
  });
  const listNav = ["Ring", "Earrings", "Bracelet", "Necklace"];

  const imgNav = {
    Ring: "https://i.postimg.cc/gkshk9qG/9560117.png",
    Earrings: "https://i.postimg.cc/zGMVVqLY/9609558.png",
    Bracelet: "https://i.postimg.cc/jjbY81mJ/1071664.png",
    Necklace: "https://i.postimg.cc/SxSJ7cJq/6208066.png",
  };

  const imgContent = {
    Ring: "https://i.postimg.cc/Wb5yznvk/05e07a75023dcd2c5356bf0fa2fe8140.jpg",
    Earrings:
      "https://i.postimg.cc/L870B8h4/b55a2d17cbcce555094739a307a65aa7.jpg",
    Bracelet:
      "https://i.postimg.cc/Z50MddbD/Mens-J-Bracelet-Banner-02-FF-674x337.jpg",
    Necklace:
      "https://i.postimg.cc/43928Rh6/a9d4cf39cef670c3e9b0613f4afeb720.jpg",
  };

  const breakpoint = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  //end

  return (
    <header>
      {/* top header */}
      <div className="top-hd">
        <div className="container-fluit">
          <div className="top-hd-wraper">
            <p>Free Shiping On All Domestic Order.</p>
            <ul>
              <li>
                <i className="fa-regular fa-clock"></i>
                Mon-Sat 9:00 - 18-00
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>
                Sun 9:00 - 12:00
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end top header */}

      {/* main header */}
      <div className="main-hd">
        <div className="container-fluit">
          <div className="main-hd-wraper bg-35">
            {/* header logo */}
            <div className="hd-logo">
              <Link className="logo-link" to={"/"}>
                <img
                  loading="lazy"
                  src="https://i.postimg.cc/K8qWvrFL/logo.png"
                  alt=""
                />
                <div className="logo-text">
                  <span className="title">Quang Phi</span>
                  <span className="sub-title">luxury piece</span>
                </div>
              </Link>
            </div>
            {/* end header logo*/}

            {/* Header navbar */}
            <nav className="hd-nav">
              <ul className="nav-menu line-bot">
                <li className="nav-item">
                  <NavLink to={"/"} end={true}>
                    Home
                  </NavLink>{" "}
                </li>
                <li className="nav-item">
                  <a href="#">Categories</a>
                  <div className="sub-nav-item bg-black">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3">
                          <ul className="sub-tabs">
                            {listNav.map((item) => {
                              return (
                                <li
                                  key={uuid()}
                                  onMouseOver={() => setTab(item)}
                                  className={`tab-item ${
                                    tab == item ? "active" : ""
                                  }`}
                                >
                                  <img
                                    loading="lazy"
                                    src={imgNav[item]}
                                    alt=""
                                  />
                                  {item}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="col-lg-9">
                          <div className="sub-tabs-content">
                            {listNav.map((item) => {
                              return (
                                <div
                                  key={uuid()}
                                  className={`tab-item ${
                                    tab == item ? "active" : ""
                                  }`}
                                >
                                  <div className="row">
                                    <div className="col-6">
                                      <div className="left-content">
                                        {
                                          <Slick
                                            show={2}
                                            row={1}
                                            custom={breakpoint}
                                          >
                                            {cate.map((item) => {
                                              return (
                                                <ItemSlick
                                                  key={uuid()}
                                                  item={item}
                                                />
                                              );
                                            })}
                                          </Slick>
                                        }
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      <div className="img">
                                        <img
                                          loading="lazy"
                                          src={imgContent[item]}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink to={"/jewelry/shop"}>Products</NavLink>
                </li>
                <li className="nav-item">
                  <a href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="#">About</a>
                </li>
                <li className="nav-item">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            {/* end Header navbar*/}

            {/* Header Menu */}
            <div className="hd-menu">
              <ul className="menu-list">
                {/* user */}
                <li
                  onClick={() => {
                    setModalLoginOpen(true);
                    componentDidMount();
                  }}
                  className="menu-item bg-yellow"
                >
                  <a className="menu-item-link" href="#">
                    <i className="fa-regular fa-user"></i>
                  </a>
                </li>
                {/* end user*/}

                {/* search */}
                <li className="menu-item search bg-yellow">
                  <a
                    onClick={() => {
                      setSearchOpen(true);
                      setSearchText([]);
                      componentDidMount();
                    }}
                    className="menu-item-link"
                    href="#"
                  >
                    <i
                      className={`fa-solid fa-magnifying-glass ${
                        searchOpen ? "unactive" : ""
                      }`}
                    ></i>
                  </a>
                  <div
                    className={`search-content bg-35 ${
                      searchOpen ? "active" : ""
                    }`}
                  >
                    <input
                      value={searchText}
                      onChange={(e) => {
                        setLoading(true);
                        setSearchText(e.target.value);
                      }}
                      type="text"
                      placeholder="Start typing to Search..."
                    />
                    <div
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchText([]);
                        setListSearch([]);
                        componentUnmount();
                      }}
                      className="search-close"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="top-search bg-black">
                      <p>Top Searchs:</p>
                      <ul>
                        <li
                          onClick={() => {
                            setLoading(true);
                            setSearchText("diamond ring");
                          }}
                        >
                          diamond ring
                        </li>
                        <li
                          onClick={() => {
                            setLoading(true);
                            setSearchText("white gold necklace");
                          }}
                        >
                          white gold necklace
                        </li>
                        <li
                          onClick={() => {
                            setLoading(true);
                            setSearchText("18k gold diamond ring");
                          }}
                        >
                          18k gold diamond ring
                        </li>
                      </ul>
                    </div>
                    <div className="search-reasult bg-black">
                      {searchText == 0 ? (
                        ""
                      ) : loading ? (
                        <div className="loading">
                          <Loading />
                        </div>
                      ) : listSearch.length == 0 ? (
                        <img
                          loading="lazy"
                          src="https://i.postimg.cc/R0ZHhkfQ/empty-state-removebg-preview.png"
                        />
                      ) : (
                        <div className="result-wraper">
                          {listSearch.map((item) => {
                            return (
                              <>
                                <div
                                  key={uuid()}
                                  className="col-lg-2 col-md-3 col-6"
                                >
                                  <ItemSlick item={item} />
                                </div>
                              </>
                            );
                          })}
                          <div className="search-end">NOTHING ELSE</div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
                {/* end search*/}

                {/* cart */}
                <li className="menu-item cart">
                  <a className="menu-item-link" href="#">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="notify">
                      <span>{cartRedux.cart.length}</span>
                    </span>
                  </a>
                  <div className="cart-dropw-down bg-35">
                    {cartRedux.cart.length ? (
                      ""
                    ) : (
                      <div className="cart-empty">
                        <img
                          loading="lazy"
                          src="https://i.postimg.cc/50LvyvPz/empty-cart.png"
                          alt=""
                        />
                      </div>
                    )}
                    <ul className="cart-box scroll-custom">
                      {cartRedux.cart.length
                        ? cartRedux.cart.map((item) => {
                            return <CartItem key={uuid()} item={item} />;
                          })
                        : ""}
                    </ul>

                    <div className="sub-total">
                      <h3 className="text">Sub-Total:</h3>
                      <span>${cartRedux.total}</span>
                    </div>

                    <div className="cart-btn w-100">
                      <Link to={"/jwelry/cart"} className="btn main-btn w-100">
                        <span>view cart</span>
                      </Link>
                    </div>
                  </div>
                </li>
                {/* end cart*/}
              </ul>
            </div>
            {/* end Header Menu*/}
          </div>
        </div>
      </div>
      {/* end main header*/}

      {/* header mobile */}
      <div className="main-hd header-mobile bg-35">
        <div className="container">
          <div className="main-hd-wraper bg-35">
            {/* logo mobile */}
            <div className="hd-logo">
              <Link className="logo-link" to={"/"}>
                <img
                  loading="lazy"
                  src="https://i.postimg.cc/K8qWvrFL/logo.png"
                  alt=""
                />
                <div className="logo-text">
                  <span className="title">Quang Phi</span>
                  <span className="sub-title">luxury piece</span>
                </div>
              </Link>
            </div>
            {/* end logo mobile*/}

            {/*menu mobile */}
            <div className="hd-menu">
              <ul className="menu-list">
                {/* cart */}
                <li className="menu-item cart">
                  <a className="menu-item-link" href="#">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="notify">
                      <span>{cartRedux.cart.length}</span>
                    </span>
                  </a>
                  <div className="cart-dropw-down bg-35">
                    {cartRedux.cart.length ? (
                      ""
                    ) : (
                      <div className="cart-empty">
                        <img
                          loading="lazy"
                          src="https://i.postimg.cc/50LvyvPz/empty-cart.png"
                          alt=""
                        />
                      </div>
                    )}
                    <ul className="cart-box scroll-custom">
                      {cartRedux.cart.length
                        ? cartRedux.cart.map((item) => {
                            return (
                              <li key={uuid()} className="cart-item">
                                <div className="img">
                                  <img loading="lazy" src={item.image} alt="" />
                                </div>
                                <div className="content">
                                  <p className="name ellipsis">
                                    <a href="#">{item.name}</a>
                                  </p>
                                  <div className="quantity-box">
                                    <span className="quantity">
                                      {item.quantity}
                                    </span>
                                    x
                                    <span className="price">${item.price}</span>
                                  </div>
                                </div>
                              </li>
                            );
                          })
                        : ""}
                    </ul>

                    <div className="sub-total">
                      <h3 className="text">Sub-Total:</h3>
                      <span>${cartRedux.total}</span>
                    </div>

                    <div className="cart-btn w-100">
                      <Link className="btn main-btn w-100" to={"/jwelry/cart"}>
                        <span>view cart</span>
                      </Link>
                    </div>
                  </div>
                </li>
                {/* end cart*/}

                {/* menu button*/}
                <li className="menu-item mobile bg-yellow">
                  <a
                    onClick={() => {
                      setOpenMenumobile(true);
                      componentDidMount();
                    }}
                    className={`menu-item-link open ${
                      openMenuMobile ? "" : "active"
                    }`}
                    href="#"
                  >
                    <i className="fa-solid fa-bars"></i>
                  </a>
                  <a
                    onClick={() => {
                      setOpenMenumobile(false);
                      componentUnmount();
                    }}
                    className={`menu-item-link close ${
                      openMenuMobile ? "active" : ""
                    }`}
                    href="#"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </a>
                  {/* aside-menu */}
                  <aside
                    className={`menu-mobile ${openMenuMobile ? "active" : ""}`}
                  >
                    <div className="overlay"></div>
                    <div className="menu-inner bg-black">
                      {/* aside button
                       */}
                      <div className="menu-btn">
                        {/* mobile search */}
                        <div className="search-mb">
                          <div className="input-group">
                            <input
                              onChange={(e) => setSearchText(e.target.value)}
                              type="search"
                              value={searchText}
                            />
                          </div>
                          <div className="search-mb-result bg-black">
                            {searchText == 0 ? (
                              ""
                            ) : loading ? (
                              <div className="loading">
                                <Loading />
                              </div>
                            ) : listSearch.length == 0 ? (
                              <img
                                loading="lazy"
                                src="https://i.postimg.cc/R0ZHhkfQ/empty-state-removebg-preview.png"
                              />
                            ) : (
                              <div className="mb-result-wraper scroll-custom">
                                <div className="row">
                                  {listSearch.map((item) => {
                                    return (
                                      <>
                                        <div
                                          key={uuid()}
                                          className="col col-12"
                                        >
                                          <ItemSlick item={item} />
                                        </div>
                                      </>
                                    );
                                  })}
                                  <div className="search-end">NOTHING ELSE</div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        {/* end mobile search */}

                        {/* login */}
                        <div
                          onClick={() => {
                            setModalLoginOpen(true);
                            componentDidMount();
                          }}
                          className="login-mb bg-yellow"
                        >
                          <a className="login-mb-link" href="#">
                            <i className="fa-regular fa-user"></i>
                          </a>
                        </div>
                        {/* end login*/}

                        {/* end aside button */}
                      </div>

                      {/* aside-menu mobile */}
                      <ul className="menu-list">
                        <li>
                          <Link className="menu-link" to={"/"}>
                            Home
                          </Link>
                        </li>

                        <li>
                          <Link className="menu-link" to={"/jewelry/shop"}>
                            Products Page
                          </Link>
                        </li>

                        <li
                          onClick={() => {
                            cateActive
                              ? componentDidMount()
                              : componentUnmount();
                            handleCateActive(cateActive, setCateActive);
                          }}
                        >
                          <Link to={"#"}>
                            Categories
                            <i
                              className={`fa-solid fa-angle-right ${
                                cateActive ? "active" : ""
                              }`}
                            ></i>
                          </Link>
                        </li>
                        {/* sub-menu mobile */}
                        <div
                          className={`sub-list-menu ${
                            cateActive ? "active" : ""
                          }`}
                        >
                          <li>
                            <Link to={"/jewelry/diamond ring"}>Rings</Link>
                          </li>
                          <li>
                            <Link to={"/jewelry/necklaces"}>Necklaces</Link>
                          </li>
                          <li>
                            <Link to={"/jewelry/bracelet"}>Bracelet</Link>
                          </li>
                          <li>
                            <Link to={"/jewelry/earrings"}>Earrings</Link>
                          </li>
                        </div>
                        {/* end sub-menu mobile*/}
                      </ul>
                      {/* end aside-menu mobile*/}
                    </div>
                  </aside>
                  {/* end aside-menu*/}
                </li>
                {/* end menu button */}
              </ul>
            </div>
            {/* end menu mobile*/}
          </div>
        </div>
      </div>
      {/* end header mobile*/}
    </header>
  );
}
