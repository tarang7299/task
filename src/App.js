import Header from "./components/Header";
import Login from "./components/Login";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import CartMenu from "./components/CartMenu";
import {
  SetItemToCart,
  SetItemToWishlist,
} from "./redux/actions/ProductAction";
import WishlistMenu from "./components/WishlistMenu";
import ViewProduct from "./components/ViewProduct";

function App() {
  const user = useSelector((state) => state.AuthReducer.email);
  const cartItem = useSelector((state) => state.ProductReducer.cartItems);
  const wishlistItem = useSelector(
    (state) => state.ProductReducer.wishlistItems
  );
  const dispatch = useDispatch();

  const handleCart = (item, flag) => {
    let tempData = [...cartItem];
    const exist = tempData.find((x) => x.id === item.id);

    // added to cart if not exist
    if (!exist) {
      alert("Product added to cart");
      dispatch(SetItemToCart([...tempData, { ...item }]));
    }
    //add subtract product from cart
    if (exist && (flag === "cartPlus" || flag === "cartMinus")) {
      dispatch(
        SetItemToCart(
          tempData.map((x) =>
            x.id === item.id
              ? {
                  ...exist,
                  quantity:
                    flag == "cartPlus"
                      ? exist.quantity + 1
                      : exist.quantity - 1,
                }
              : x
          )
        )
      );
    }
    // remove product from cart
    if (flag == "remove") {
      dispatch(SetItemToCart(tempData.filter((x) => x.id !== item.id)));
    }
    // if already in array and adding so alaert this
    if (exist && flag === "addCart") {
      alert("Product already exists in cart");
    }
  };
  const handleWishlist = (item, flag) => {
    let tempData = [...wishlistItem];
    const exist = wishlistItem.find((x) => x.id === item.id);

    if (flag === "remove") {
      dispatch(SetItemToWishlist(tempData.filter((x) => x.id !== item.id)));
    } else {
      if (!exist) {
        alert("Product added to wishlist");
        dispatch(SetItemToWishlist([...tempData, { ...item }]));
      } else {
        alert("Product already exists in wishlist");
      }
    }
  };
  return (
    <Router>
      <div className="page-wrapper">
        <Header />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home handleCart={handleCart} handleWishlist={handleWishlist} />
            }
          ></Route>
          <Route />
          <Route
            exact
            path="/view-product"
            element={
              <ViewProduct
                handleCart={handleCart}
                handleWishlist={handleWishlist}
              />
            }
          ></Route>

          {user ? (
            <>
              <Route
                index
                path="/cart-menu"
                element={<CartMenu handleCart={handleCart} />}
              ></Route>
              <Route
                index
                path="/wishlist-menu"
                element={
                  <WishlistMenu
                    handleCart={handleCart}
                    handleWishlist={handleWishlist}
                  />
                }
              ></Route>
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
