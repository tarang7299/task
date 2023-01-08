import rootReducer from "./reducers/RootReducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
// import storageSession from "redux-persist/lib/storage/session";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "e-commerce",
  // storage: storageSession,
  storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// if you dont need dev tools then keep only applyMiddleware(...middlewares)
const store = createStore(pReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export default store;
export { persistor };
