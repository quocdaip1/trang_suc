import { memo, useContext, useState } from "react";
import { componentUnmount } from "../../service/utils";
import { myContext } from "../context/Context";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/Reducer/userSlice";

const ModalRegister = (props) => {
  const mContext = useContext(myContext);
  const dispatch = useDispatch();
  const usersRedux = useSelector((state) => state.user);
  const { setModalLoginOpen, setModalRegisterOpen, modalRegisterOpen } =
    mContext;
  const [username, setUsername] = useState("");
  const [fildNameMess, setFildNameMess] = useState("");

  const [password, setPassword] = useState("");
  const [fildPassMess, setFildPassMess] = useState("");

  const [confirmPass, setConfirmPass] = useState("");
  const [confirmMess, setConfirmMess] = useState("");
  let accept = true;

  const validate = (field, data) => {
    if (field === "username") {
      if (data.trim() === "") {
        setFildNameMess("The username field is required.");
        accept = false;
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
    if (field === "confirm") {
      if (password && data != password) {
        setConfirmMess("The password field confirmation does not match.");
        setPassword("");
        setConfirmPass("");
        accept = false;
      } else {
        setConfirmMess("");
      }
    }
  };
  const handleSubmitValidate =async(e) => {
    e.stopPropagation()
    validate("username", username);
    validate("password", password);
    validate("confirm", confirmPass);
    if (accept) {
      console.log(usersRedux)
     await dispatch(addUser({ id: 1, username, password }));
     if(usersRedux.success){
       setModalLoginOpen(true);
       setModalRegisterOpen(false)
      }
    }   
  };

  return (
    <div id="modal-register" className={`${modalRegisterOpen ? "active" : ""}`}>
      <div className="container">
        <div className="modal-wraper">
          <div className="close-login">
            <button
              onClick={() => {
                setModalRegisterOpen(false);
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
                    <h2>register now</h2>
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
                  <h2 className="title">register</h2>
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
                        <div className="form-group">
                          <input
                            onChange={(e) => setConfirmPass(e.target.value)}
                            value={confirmPass}
                            type="password"
                            placeholder="Confirm PassWord"
                          />
                          <span className="form-message">{confirmMess}</span>
                        </div>
                      </div>
                      <button
                        onClick={e=>handleSubmitValidate(e)}
                        className="btn login-btn border-btn mt-20 my-5"
                      >
                        <span>register</span>
                      </button>
                      <span>
                        Already have an account?{" "}
                        <a
                          onClick={() => {
                            setModalLoginOpen(true);
                            setModalRegisterOpen(false);
                            setFildNameMess('');
                            setFildPassMess('');
                            setConfirmMess('');
                          }}
                          className="link register-link"
                          href="#"
                        >
                          Login here.
                        </a>
                      </span>
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

export default memo(ModalRegister);
