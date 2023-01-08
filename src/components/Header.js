import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../redux/actions/AuthAction";

const Header = () => {
  const user = useSelector((state) => state.AuthReducer.email);
  const cartItem = useSelector((state) => state.ProductReducer.cartItems);
  const wishlistItem = useSelector(
    (state) => state.ProductReducer.wishlistItems
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(
        AuthAction({
          email: "",
          password: "",
        })
      );
    }
  };

  const handleCartPage = (path) => {
    if (user) {
      navigate(path);
    } else {
      alert("Login first");
      setTimeout(() => {
        navigate("/login", { state: { path: path } });
      }, 500);
    }
  };
  return (
    <>
      <header className="header header-intro-clearance header-3">
        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                {/* <i className="icon-bars" /> */}
              </button>
              <Link to="/">
                <a className="logo">
                  <span style={{ fontSize: "3rem" }}>HOME</span>
                </a>
              </Link>
            </div>
            <div className="header-center">
              <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                <a href="#" className="search-toggle" role="button">
                  <i className="icon-search" />
                </a>
                <form action="#" method="get">
                  <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <button className="btn btn-primary" type="submit">
                      <i className="icon-search" />
                    </button>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search product ..."
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="header-right">
              <div className="wishlist">
                <a
                  title="Wishlist"
                  onClick={() => handleCartPage("/wishlist-menu")}
                >
                  <div className="icon">
                    <i className="icon-heart-o" />
                    <span className="wishlist-count badge">
                      {wishlistItem?.length}
                    </span>
                  </div>
                  <p>Wishlist</p>
                </a>
              </div>
              <div className="dropdown cart-dropdown">
                <a
                  onClick={() => handleCartPage("/cart-menu")}
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <div className="icon">
                    <i className="icon-shopping-cart" />
                    <span className="cart-count">{cartItem?.length}</span>
                  </div>
                  <p>Cart</p>
                </a>
              </div>

              {user ? (
                <Link to="/">
                  <a onClick={onLogout} data-toggle="modal" className="mx-5">
                    <i className="icon-user" />
                    Logout
                  </a>
                </Link>
              ) : (
                <Link to="/login">
                  <a data-toggle="modal" className="mx-5">
                    <i className="icon-user" />
                    Login
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
