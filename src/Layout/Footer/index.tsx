import { useRef, useState } from "react";
import { Foot, IconBg } from "./index.styles";
import { LockOutlined, UnlockOutlined } from "@ant-design/icons";
export default function Footer() {
  const ref = useRef(null);
  const [isLock, setIsLock] = useState(false);
  const [top, setTop] = useState(0);
  const handleMouseEnter = () => {
    setTop(-60);
  };
  const handleMouseLeave = () => {
    !isLock && setTop(0);
  };
  const handleLock = () => {
    setIsLock(!isLock);
  };
  type iconListType = {
    title: string;
    position: string;
    activedPosition: string;
  };
  const [iconList] = useState<iconListType[]>([
    {
      title: "音乐开放平台",
      position: "-170px -5px",
      activedPosition: "-5px -115px",
    },
    {
      title: "云村交易所",
      position: "-5px -170px",
      activedPosition: "-60px -170px",
    },
    {
      title: "X StudioAI歌手",
      position: "-5px -60px",
      activedPosition: "-60px -5px",
    },
    {
      title: "用户认证",
      position: "-60px -60px",
      activedPosition: "-115px -5px",
    },
    {
      title: "AI 免费写歌",
      position: "-115px -115px",
      activedPosition: "-5px -5px",
    },
    {
      title: "云推歌",
      position: "-170px -60px",
      activedPosition: "-115px -60px",
    },
    {
      title: "赞赏",
      position: "-170px -115px",
      activedPosition: "-60px -115px",
    },
  ]);
  return (
    <>
      <Foot>
        <div className="foot-container">
          <ul className="icons">
            {iconList.map((item) => (
              <li>
                <IconBg
                  position={item.position}
                  activedposition={item.activedPosition}
                ></IconBg>
                <div>{item.title}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="play-wrap">
          <div
            className="play-container"
            ref={ref}
            style={{ top: top + "px" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="icon-box" onClick={handleLock}>
              {isLock ? (
                <LockOutlined className="icon" />
              ) : (
                <UnlockOutlined className="icon" />
              )}
            </div>
          </div>
        </div>
      </Foot>
    </>
  );
}
