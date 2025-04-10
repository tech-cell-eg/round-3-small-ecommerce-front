import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ToastMessage = {
  severity: "success" | "info" | "warn" | "error" | "secondary";
  summary: string;
  detail: string;
};

type ToastState = {
  message: ToastMessage | null;
};

const initialState: ToastState = {
  message: null,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<ToastMessage>) {
      state.message = action.payload;
    },
    clearToast(state) {
      state.message = null;
    },
  },
});

export const { showToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;
