import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer, // Specify your root reducer here
});

export default store;

// import { createStore } from "redux";
// import rootReducer from "./reducer";

// const store = createStore(rootReducer);

// export default store;
