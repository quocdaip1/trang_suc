import { useContext, useState } from "react";
import { componentUnmount } from "../../service/utils";
import { myContext } from "../context/Context";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ModalLogin = (props) => {
  const mContext = useContext(myContext);
  const usersRedux = useSelector((state) => state.user.users);
  const navigate = useNavigate();
  const {
    modalLoginOpen,
    setModalLoginOpen,
    setModalRegisterOpen,
  } = mContext;
  const [username, setUsername] = useState("");
  const [fildNameMess, setFildNameMess] = useState("");

  const [password, setPassword] = useState("");
  const [fildPassMess, setFildPassMess] = useState("");
  let accept = true;

  const validate = (field, data) => {
    if (field === "username") {
      if (data.trim() === "") {
        setFildNameMess("The username field is required.");
        accept = true;
      } else {
        setFildNameMess("");
      }
    }
    if (field === "password") {
      if (data.trim() === "") {
        setFildPassMess("The password field is required.");
        accept = false;
      } else if (data.length < 8) {
        setFildPassMess("The password field must be at least 8 characters.");
        accept = false;
      } else {
        setFildPassMess("");
      }
    }
  };
  const handleSubmitValidate = (e) => {
    e.stopPropagation();
    validate("username", username);
    validate("password", password);
    if (accept) {
      const indexUser = usersRedux.findIndex(
        (user) => user.username === username
      );
      if (indexUser !== -1) {
        usersRedux[indexUser].password == password
          ? localStorage.setItem("user", JSON.stringify({
            id: usersRedux[indexUser].id,
            username
          }))
          : setFildPassMess("The password is incorrect.");
          navigate("/");
      }
      else{
        setFildNameMess("The username does not exist.");
      }

    }
  };

  return (
    <div id="modal-login" className={`${modalLoginOpen ? "active" : ""}`}>
      <div className="container">
        <div className="modal-wraper">
          <div className="close-login">
            <button
              onClick={() => {
                setModalLoginOpen(false);
                componentUnmount();
              }}
              className="close-btn rs-btn"
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <div className="modal-content">
            <div className="row">
              <div className="col col-lg-6 col-md-12 col-12">
                <div className="login-img h-100 ">
                  <div className="img h-100">
                    <img
                      skeleton="true"
                      className="h-100"
                      loading="lazy"
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
                <div className="login-form w-100">
                  <h2 className="title">login</h2>
                  <form className="w-100">
                    <div className="form-wraper">
                      <div className="input-box w-100">
                        <div className="form-group">
                          <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            placeholder="UserName"
                          />
                          <span className="form-message">{fildNameMess}</span>
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="PassWord"
                          />
                          <span className="form-message">{fildPassMess}</span>
                        </div>
                      </div>
                      <a className="forgot-link" href="#">
                        forgot password ?
                      </a>
                      <span>
                        Don't have an account?{" "}
                        <a
                          onClick={() => {
                            setModalRegisterOpen(true);
                            setModalLoginOpen(false);
                            setFildNameMess('');
                            setFildPassMess('');
                          }}
                          className="link register-link"
                          href="#"
                        >
                          Register here.
                        </a>
                      </span>
                      <button
                        onClick={e=>handleSubmitValidate(e)}
                        className="btn login-btn border-btn mt-20"
                      >
                        <span>login</span>
                      </button>
                      <span className="form-seperator">
                        <span>or</span>
                      </span>
                      <div className="social-log w-100">
                        <a href="#" className="btn main-btn">
                          <img
                            skeleton="true"
                            loading="lazy"
                            src="https://i.postimg.cc/wvVBspRT/image.png"
                            alt=""
                          />
                          <span>continue with facebook</span>
                        </a>
                        <a href="#" className="btn main-btn">
                          <img
                            skeleton="true"
                            loading="lazy"
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
