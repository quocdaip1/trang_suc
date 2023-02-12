import { useContext } from "react";
import { componentUnmount } from "../../service/utils";
import { myContext } from "../context/Context";

const ModalLogin = (props) => {
  const mContext = useContext(myContext);
  const { modalLoginOpen, setModalLoginOpen } = mContext;
  return (
    <div id="modal-login" className={`${modalLoginOpen ? "active" : ""}`}>
      <div className="modal-wraper">
        <div className="close-login">
          <button
            onClick={() => {
              setModalLoginOpen(false);
              componentUnmount()
            }}
            className="close-btn rs-btn"
          >
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
        <div className="modal-content">
          <div className="container">
            <div className="row">
              <div className="col col-lg-6 col-md-12">
                <div className="login-img">
                  <div className="img">
                    <img
                      src="https://i.postimg.cc/W43Skg8q/download.png"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <h2>welcome back</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur saepe asperiores eligendi, perferendis
                      voluptatibus amet quas molestias rem soluta porro!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-lg-6 col-md-8">
                <div className="login-form">
                  <h2 className="title">login</h2>
                  <form>
                    <div className="form-wraper">
                      <div className="input-box">
                        <input type="text" placeholder="UserName" />
                        <input type="password" placeholder="PassWord" />
                      </div>
                      <a className="forgot-link" href="#">
                        forgot password
                      </a>
                      <button className="login-btn main-btn mt-20">
                        <span>login</span>
                      </button>
                      <span className="form-seperator">
                        <span>or</span>
                      </span>
                      <div className="social-log">
                        <a href="#" className="main-btn">
                          <img
                            src="https://i.postimg.cc/wvVBspRT/image.png"
                            alt=""
                          />
                          <span>continue with facebook</span>
                        </a>
                        <a href="#" className="main-btn">
                          <img
                            src="https://i.postimg.cc/Yq1t4kcc/image.png"
                            alt=""
                          />
                          <span>continue with google</span>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
