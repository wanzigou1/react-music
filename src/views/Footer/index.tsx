import { useRef, useState } from "react";
import "./index.less";
import { PushpinOutlined } from "@ant-design/icons";
export default function Footer() {
  const ref = useRef(null);
  const [isLock, setIsLock] = useState(false);
  const [top, setTop] = useState(-7);
  const handleMouseEnter = () => {
    setTop(-60);
  };
  const handleMouseLeave = () => {
    !isLock && setTop(-7);
  };
  const handleLock = () => {
    setIsLock(!isLock);
  };
  return (
    <>
      <div className="footer-container">
        <div
          className="play-container"
          ref={ref}
          style={{ top: top + "px" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="icon-box" onClick={handleLock}>
            <PushpinOutlined className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}
