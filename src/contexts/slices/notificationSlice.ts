import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Notification {
  id: number;
  message: string;
  type: string;
}

interface NotificationState {
  notifications: Notification[];
}

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification(
      state,
      action: PayloadAction<{ message: string; type: string }>
    ) {
      state.notifications.push({
        id: Date.now(),
        message: action.payload.message,
        type: action.payload.type,
      });
    },
    removeNotification(state, action: PayloadAction<number>) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export const { addNotification, removeNotification, clearNotifications } =
  notificationSlice.actions;

export default notificationSlice.reducer;
