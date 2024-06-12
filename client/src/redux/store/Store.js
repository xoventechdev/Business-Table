import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "../state/BusinessSlice";

export default configureStore({
  reducer: {
    business: businessSlice,
  },
});
