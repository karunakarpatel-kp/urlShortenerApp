"use client";
import { useAppDispatch, useAppSelector } from "../../app/GlobalStore/store";
import { sendNotificationToast } from "../../app/GlobalStore/Slices/UISlice/UISlice";
import { enqueueSnackbar } from "notistack";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";

interface NotificationProps {
  children: React.ReactNode;
}

const Notification = (props: NotificationProps) => {
  const dispatch = useAppDispatch();
  const centralNotificationToast = useAppSelector((state) => state.UISlice.Toast);

  useEffect(() => {
    if (centralNotificationToast.message !== "") {
      enqueueSnackbar({ message: centralNotificationToast.message, variant: centralNotificationToast.variant });
    }
  }, [centralNotificationToast]);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      dispatch(sendNotificationToast({ Toast: { message: "", variant: "info" } }));
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [centralNotificationToast]);

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      autoHideDuration={3000}
      // preventDuplicate
    >
      {props.children}
    </SnackbarProvider>
  );
};

export default Notification;
