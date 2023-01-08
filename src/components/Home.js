import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = ({ handleCart, handleWishlist }) => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.ProductReducer.products);

  return (
    <div className="main" style={{ margin: "8rem" }}>
      <div className="tab-content tab-content-carousel">
        <div
          className="tab-pane p-0 fade show active"
          id="products-featured-tab"
          role="tabpanel"
          aria-labelledby="products-featured-link"
        >
          <div
            className="owl-carousel owl-full carousel-equal-height carousel-with-shadow owl-loaded owl-drag"
            data-toggle="owl"
            data-owl-options='{
"nav": true, 
"dots": true,
"margin": 20,
"loop": false,
"responsive": {
    "0": {
        "items":2
    },
    "600": {
        "items":2
    },
    "992": {
        "items":3
    },
    "1200": {
        "items":4
    }
  }
}'
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {products.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0s ease 0s",
                        }}
                      >
                        <div
                          className="owl-item active"
                          style={{ width: 277, marginRight: 20 }}
                        >
                          <div className="product product-2">
                            <figure className="product-media">
                              <a
                                onClick={() =>
                                  navigate("/view-product", {
                                    state: item,
                                  })
                                }
                              >
                                <img
                                  src={item.image}
                                  // src="assets/images/demos/demo-3/products/product-11.jpg"
                                  alt="Product image"
                                  className="product-image"
                                />
                              </a>

                              <div className="product-action product-action-dark">
                                <a
                                  className="btn-product btn-cart"
                                  title="Add to cart"
                                  onClick={() => handleCart(item, "addCart")}
                                >
                                  <span>Add to cart</span>
                                </a>
                                <a
                                  className="btn-product btn-wishlist"
                                  title="Quick view"
                                  onClick={() => handleWishlist(item)}
                                >
                                  <span>Add to wishlist</span>
                                </a>
                              </div>
                            </figure>
                            <div className="product-body">
                              <div className="product-cat">
                                <a href="#" className="text-capitalize">
                                  {item.category}
                                </a>
                              </div>
                              <h3 className="product-title">
                                <a href="product.html">{item.title}</a>
                              </h3>
                              <div className="product-price">${item.price}</div>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div
                                    className="ratings-val"
                                    style={{
                                      width: `${
                                        (item?.rating?.rate * 100) / 5
                                      }%`,
                                    }}
                                  />
                                </div>
                                <span className="ratings-text">
                                  ( {`${item?.rating?.count}`} Reviews )
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev disabled"
                      >
                        <i className="icon-angle-left" />
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next"
                      >
                        <i className="icon-angle-right" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
