import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "app/GlobalStore/store";
// import { RootState } from "../../store";

interface initialStateProps {
  Toast: {
    variant: "success" | "info" | "warning" | "error";
    message: string;
  };
  showConfetti?: boolean;
}

const initialState: initialStateProps = {
  Toast: {
    variant: "success",
    message: "",
  },
  showConfetti: false,
};

const UISlice = createSlice({
  name: "UISlice",
  initialState,
  reducers: {
    sendNotificationToast: (state: initialStateProps, action: PayloadAction<initialStateProps>) => {
      state.Toast.message = action.payload.Toast.message;
      state.Toast.variant = action.payload.Toast.variant;
    },
    sendConfetti: (state, action: PayloadAction<boolean>) => {
      state.showConfetti = action.payload;
    },
  },
});

export const { sendNotificationToast, sendConfetti } = UISlice.actions;

export default UISlice.reducer;
