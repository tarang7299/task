import React from "react";
import { Link, useLocation } from "react-router-dom";

const ViewProduct = ({ handleCart, handleWishlist }) => {
  const location = useLocation();
  return (
    <>
      {location.state ? (
        <div className="page-content" style={{ margin: "3rem" }}>
          <div className="container">
            <div className="product-details-top">
              <div className="row">
                <div className="col-md-6">
                  <div className="product-gallery product-gallery-vertical">
                    <div className="row">
                      <figure className="product-main-image">
                        <img
                          id="product-zoom"
                          // src="assets/images/products/single/1.jpg"
                          src={location.state.image}
                          data-zoom-image="assets/images/products/single/1-big.jpg"
                          alt="product image"
                        />
                      </figure>
                      <div
                        id="product-zoom-gallery"
                        className="product-image-gallery"
                      >
                        <a
                          className="product-gallery-item active"
                          data-image="assets/images/products/single/1.jpg"
                          data-zoom-image="assets/images/products/single/1-big.jpg"
                        >
                          <img src={location.state.image} alt="product side" />
                        </a>
                        <a
                          className="product-gallery-item"
                          data-image="assets/images/products/single/2.jpg"
                          data-zoom-image="assets/images/products/single/2-big.jpg"
                        >
                          <img src={location.state.image} alt="product cross" />
                        </a>
                        <a
                          className="product-gallery-item"
                          data-image="assets/images/products/single/3.jpg"
                          data-zoom-image="assets/images/products/single/3-big.jpg"
                        >
                          <img
                            src={location.state.image}
                            alt="product with model"
                          />
                        </a>
                        <a
                          className="product-gallery-item"
                          data-image="assets/images/products/single/4.jpg"
                          data-zoom-image="assets/images/products/single/4-big.jpg"
                        >
                          <img src={location.state.image} alt="product back" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-details">
                    <h1 className="product-title">{location.state.title}</h1>
                    <div className="ratings-container">
                      <div className="ratings">
                        <div
                          className="ratings-val"
                          style={{
                            width: `${
                              (location.state?.rating?.rate * 100) / 5
                            }%`,
                          }}
                        />
                      </div>
                      <a className="ratings-text" id="review-link">
                        ( {`${location.state?.rating?.count}`} Reviews )
                      </a>
                    </div>
                    <div className="product-price">${location.state.price}</div>
                    <div className="product-content">
                      <p>{location.state.description} </p>
                    </div>
                    <div className="details-filter-row details-row-size">
                      <label>Color:</label>
                      <div className="product-nav product-nav-thumbs">
                        <a className="active">
                          <img src={location.state.image} alt="product desc" />
                        </a>
                        <a>
                          <img src={location.state.image} alt="product desc" />
                        </a>
                      </div>
                    </div>

                    <div className="product-details-action">
                      <div className="details-action-wrapper">
                        <a
                          style={{ cursor: "pointer" }}
                          className="btn-product"
                          title="Cart"
                          onClick={() => handleCart(location.state, "addCart")}
                        >
                          <span>Add to Cart</span>
                        </a>
                        <a
                          style={{ cursor: "pointer" }}
                          className="btn-product"
                          title="Wishlist"
                          onClick={() => handleWishlist(location.state)}
                        >
                          <span>Add to Wishlist</span>
                        </a>
                      </div>
                    </div>
                    <div className="product-details-footer">
                      <div className="product-cat">
                        <span>Category:</span>
                        {location.state.category}
                      </div>
                      <div className="social-icons social-icons-sm">
                        <span className="social-label">Share:</span>
                        <a
                          className="social-icon"
                          title="Facebook"
                          target="_blank"
                        >
                          <i className="icon-facebook-f" />
                        </a>
                        <a
                          className="social-icon"
                          title="Twitter"
                          target="_blank"
                        >
                          <i className="icon-twitter" />
                        </a>
                        <a
                          className="social-icon"
                          title="Instagram"
                          target="_blank"
                        >
                          <i className="icon-instagram" />
                        </a>
                        <a
                          className="social-icon"
                          title="Pinterest"
                          target="_blank"
                        >
                          <i className="icon-pinterest" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <strong>
          NO PRODUCTS FOUND WITH THIS ID,{" "}
          <Link to="/">
            <span>CONTINUE SHOPPING</span>
          </Link>
        </strong>
      )}
    </>
  );
};

export default ViewProduct;
