import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const LoadingProgressBar = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};

export default LoadingProgressBar;
