import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SetItemToCart } from "../redux/actions/ProductAction";

const CartMenu = ({ handleCart }) => {
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.ProductReducer.cartItems);
  const priceArr = [];
  const dispatch = useDispatch();

  const onCheckout = () => {
    dispatch(SetItemToCart([]));
    setTimeout(() => {
      alert("Your order has been placed successfully");
    }, 500);
  };

  return (
    <div className="page-content" style={{ margin: "3rem" }}>
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {cartItem.length > 0 ? (
                <table className="table table-cart table-mobile">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((item) => {
                      {
                        priceArr.push(item.price * item.quantity);
                      }
                      return (
                        <tr key={item.id}>
                          <td className="product-col">
                            <div
                              style={{ cursor: "pointer" }}
                              className="product"
                              onClick={() =>
                                navigate("/view-product", {
                                  state: item,
                                })
                              }
                            >
                              <figure className="product-media">
                                <a>
                                  <img
                                    src={item.image}
                                    alt="Product image"
                                    className="product-image"
                                  />
                                </a>
                              </figure>
                              <h3 className="product-title">
                                <a>{item.title}</a>
                              </h3>
                            </div>
                          </td>
                          <td className="price-col">${item.price}</td>
                          <td className="quantity-col">
                            <div className="cart-product-quantity">
                              <button
                                style={{ minWidth: 26 }}
                                onClick={() =>
                                  item.quantity > 1 &&
                                  handleCart(item, "cartMinus")
                                }
                                className="btn btn-decrement btn-spinner"
                                type="button"
                              >
                                <i className="icon-minus" />
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                style={{ minWidth: 26 }}
                                onClick={() => handleCart(item, "cartPlus")}
                                className="btn btn-increment btn-spinner"
                                type="button"
                              >
                                <i className="icon-plus" />
                              </button>
                            </div>
                          </td>
                          <td className="total-col">
                            {}${(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td
                            className="remove-col"
                            onClick={() =>
                              item.quantity > 0 && handleCart(item, "remove")
                            }
                          >
                            <button className="btn-remove">
                              <i className="icon-close" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <strong>
                  CART IS EMPTY,{" "}
                  <Link to="/">
                    <span>CONTINUE SHOPPING</span>
                  </Link>
                </strong>
              )}
            </div>
            {cartItem.length > 0 && (
              <aside className="col-lg-3">
                <div className="summary summary-cart">
                  <h3 className="summary-title">Cart Total</h3>
                  <table className="table table-summary">
                    <tbody>
                      <tr className="summary-subtotal">
                        <td>Subtotal:</td>
                        <td>
                          ${priceArr.reduce((a, b) => a + b, 0).toFixed(2)}
                        </td>
                      </tr>
                      <tr className="summary-shipping">
                        <td>Shipping:</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="free-shipping"
                              name="shipping"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="free-shipping"
                            >
                              Free Shipping
                            </label>
                          </div>
                        </td>
                        <td>$0.00</td>
                      </tr>
                      <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="standart-shipping"
                              name="shipping"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="standart-shipping"
                            >
                              Standart:
                            </label>
                          </div>
                        </td>
                        <td>$10.00</td>
                      </tr>
                      <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="express-shipping"
                              name="shipping"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="express-shipping"
                            >
                              Express:
                            </label>
                          </div>
                        </td>
                        <td>$20.00</td>
                      </tr>

                      <tr className="summary-total">
                        <td>Total:</td>
                        <td>
                          $
                          {(
                            priceArr.reduce((a, b) => a + b, 0) +
                            [10.0, 20.0].reduce((a, b) => a + b, 0)
                          ).toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a
                    className="btn btn-outline-primary-2 btn-order btn-block"
                    onClick={onCheckout}
                  >
                    PROCEED TO CHECKOUT
                  </a>
                </div>
                <Link to="/">
                  <a className="btn btn-outline-dark-2 btn-block mb-3">
                    <span>CONTINUE SHOPPING</span>
                    <i className="icon-refresh" />
                  </a>
                </Link>
              </aside>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
