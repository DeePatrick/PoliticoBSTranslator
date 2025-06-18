import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface NotificationItem {
  id: symbol;
  text: string;
  theme:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

// Define a type for the slice state
interface NotificationState {
  notifications: NotificationItem[];
}

// Define the initial state using that type
const initialState: NotificationState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNotification: (state, value) => {
      state.notifications = [...state.notifications, value.payload];
    },
    removeNotification: (state, value) => {
      state.notifications = state.notifications.filter(
        (item) => item.id !== value.payload,
      );
    },
  },
});

export const { addNotification, removeNotification } =
  notificationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNotificationsData = (state: RootState) => state.notification;

export default notificationSlice.reducer;
