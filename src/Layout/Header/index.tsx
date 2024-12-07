import * as Styles from "./index.styles";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
export default function Header() {
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
  useEffect(() => {
    if (pathname !== "" && pathname !== "/" && pathname !== "/discover") {
      setSubMenu([]);
    } else {
      setSubMenu(initMenu);
    }
  }, [pathname]);
  const [subMenu, setSubMenu] = useState(initMenu);
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
            <Input
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            ></Input>
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
