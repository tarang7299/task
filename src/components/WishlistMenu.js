import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WishlistMenu = ({ handleCart, handleWishlist }) => {
  const wishlistItem = useSelector(
    (state) => state.ProductReducer.wishlistItems
  );
  return (
    <div className="page-content" style={{ margin: "3rem" }}>
      <div className="container">
        {wishlistItem.length > 0 ? (
          <table className="table table-wishlist table-mobile">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {wishlistItem.map((item) => (
                <tr>
                  <td className="product-col">
                    <div className="product">
                      <figure className="product-media">
                        <a href="#">
                          <img src={item.image} alt="Product image" />
                        </a>
                      </figure>
                      <h3 className="product-title">
                        <a href="#">{item.title}</a>
                      </h3>
                    </div>
                  </td>
                  <td className="price-col">${item.price}</td>
                  <td className="stock-col">
                    <span className="in-stock">In stock</span>
                  </td>
                  <td
                    className="action-col"
                    onClick={() => handleCart(item, "addCart")}
                  >
                    <button className="btn btn-block btn-outline-primary-2">
                      <i className="icon-cart-plus" />
                      Add to Cart
                    </button>
                  </td>
                  <td
                    className="remove-col"
                    onClick={() => handleWishlist(item, "remove")}
                  >
                    <button className="btn-remove">
                      <i className="icon-close" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <strong>
            WISHLIST IS EMPTY,{" "}
            <Link to="/">
              <span>CONTINUE SHOPPING</span>
            </Link>
          </strong>
        )}
      </div>
    </div>
  );
};

export default WishlistMenu;
