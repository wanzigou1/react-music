import * as Styles from "./index.styles";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import SuggestInput from "./components/SuggestInput";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "antd";
export default function Header() {
  // 初始化菜单
  const initMenu = [
    { name: "推荐", path: "/discover", target: "", actived: true },
    {
      name: "排行榜",
      path: "/discover/toplist",
      target: "",
      actived: false,
    },
    {
      name: "歌单",
      path: "/discover/playlist",
      target: "",
      actived: false,
    },
    {
      name: "主播电台",
      path: "/discover/djradio",
      target: "",
      actived: false,
    },
    { name: "歌手", path: "/discover/artist", target: "", actived: false },
    {
      name: "新碟上架",
      path: "/discover/album",
      target: "",
      actived: false,
    },
  ];
  const { pathname } = useLocation();
  const [subMenu, setSubMenu] = useState(initMenu);
  useEffect(() => {
    if (pathname !== "" && pathname !== "/" && pathname !== "/discover") {
      setSubMenu([]);
    } else {
      setSubMenu(initMenu);
    }
  }, [pathname]);
  // 切换菜单
  const handleClick = (index: number) => {
    const temp = subMenu.map((item, i) => ({ ...item, actived: i === index }));
    setSubMenu(temp);
  };
  return (
    <>
      <Styles.Header>
        <div className="header-container">
          <Logo></Logo>
          <Menu></Menu>
          <div className="input-container">
            <SuggestInput></SuggestInput>
          </div>
          <Button className="btn-l" color="default" variant="solid">
            创作者中心
          </Button>
          <Button className="btn-r" color="default" variant="link">
            登录
          </Button>
        </div>
      </Styles.Header>
      <Styles.Container>
        <div className="sub-nav">
          {subMenu.map((item, index) => (
            <div
              className={item.actived ? "sub-nav-text actived" : "sub-nav-text"}
              key={item.path}
              onClick={() => handleClick(index)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </Styles.Container>
    </>
  );
}
