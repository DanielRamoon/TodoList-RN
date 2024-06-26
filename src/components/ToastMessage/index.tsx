import React, { useEffect, useRef } from "react";
import Toast, { ToastOptions } from "react-native-toast-message";

const ToastMessage = () => {
  const toastRef = useRef<ToastOptions>(null);

  useEffect(() => {
    if (toastRef.current) {
      Toast.setRef(toastRef.current);
    }
  }, []);

  return <Toast ref={toastRef} />;
};

export default ToastMessage;
