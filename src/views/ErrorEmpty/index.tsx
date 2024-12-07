import Lottie from "lottie-web";
import Animation from "@/assets/error-animation.json";
import { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ErrorStyles } from "./index.styles";
const ErrorEmpty = () => {
  const lottieRef = useRef(null);
  const [time, setTime] = useState(3);
  const navigate = useNavigate();
  useEffect(() => {
    Lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Animation,
    });
    return () => {
      lottieRef.current = null;
    };
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (time > 0) {
        setTime((time) => time - 1);
      } else {
        goBack();
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [time]);
  const goBack = () => {
    navigate("/");
  };
  return (
    <ErrorStyles>
      <div className="error-svg" ref={lottieRef}></div>
      <h2 className="error-title">你访问的页面不见了~</h2>
      <div className="go-back-title">
        {time > 0 ? `${time}秒后将自动返回首页` : "正在跳转首页"}
      </div>
      <Button
        onClick={goBack}
        shape="round"
        type="primary"
        danger
        className="go-back"
      >
        返回首页
      </Button>
    </ErrorStyles>
  );
};
export default ErrorEmpty;
