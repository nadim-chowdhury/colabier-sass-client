import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import projectSlice from "./slices/projectSlice";
import notificationSlice from "./slices/notificationSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    projects: projectSlice,
    notifications: notificationSlice,
  },
});

export default store;
