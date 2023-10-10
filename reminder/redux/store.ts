import { configureStore } from "@reduxjs/toolkit";
// import phoneReducer from "./features/phoneSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
// import authReducer from "./features/authSlice";
// import serviceReducer from "./features/servicecartSlice";
// import bookingReducer from "./features/bookingSlice";
const rootReducer = combineReducers({
//   phone: phoneReducer,
//   auth: authReducer,
//   service: serviceReducer,
//   booking: bookingReducer,
});

const persistConfig = {
  key: "root",
  storage,
  timeout: 100,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, 
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
