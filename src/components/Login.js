import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthAction } from "./../redux/actions/AuthAction";

const Login = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onLogin = () => {
    if (!email & (email === "") && email.trim() === "") {
      alert("Email is req");
    } else if (!pass & (pass === "") && pass.trim() === "") {
      alert("Password is req");
    } else {
      dispatch(
        AuthAction({
          email: email,
          password: pass,
        })
      );
      navigate(location.state.path || "/");
    }
  };
  return (
    <div className="modal-open" id="signin-modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <Link to="/">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="icon-close" />
                </span>
              </button>
            </Link>
            <div className="form-box">
              <div className="form-tab">
                <ul className="nav nav-pills nav-fill" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="signin-tab">
                      Log in
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="tab-content-5">
                  <div
                    className="tab-pane fade show active"
                    id="signin"
                    role="tabpanel"
                    aria-labelledby="signin-tab"
                  >
                    <form>
                      <div className="form-group">
                        <label htmlFor="singin-email">
                          Username or email address *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="singin-email"
                          name="singin-email"
                          onChange={(e) => setemail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="singin-password">Password *</label>
                        <input
                          type="password"
                          className="form-control"
                          id="singin-password"
                          name="singin-password"
                          onChange={(e) => setpass(e.target.value)}
                          required
                        />
                      </div>
                      <div
                        className="form-footer"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          onClick={onLogin}
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>LOG IN</span>
                          <i className="icon-long-arrow-right" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
