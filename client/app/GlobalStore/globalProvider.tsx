"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Notification from "@Components/NotificationToast/Notification";

interface globalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider = (props: globalProviderProps) => {
  const { children } = props;
  return (
    <Provider store={store}>
      <Notification>{children}</Notification>
    </Provider>
  );
};

export default GlobalProvider;
