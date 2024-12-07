import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import "./index.less";
import { MenuStyles } from "./index.styles";
export default function Menu() {
  // 初始化菜单
  const initMenu = [
    {
      name: "发现音乐",
      path: "/",
      target: "",
      actived: false,
      chindren: [
        { name: "推荐", path: "/discover", target: "", actived: false },
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
          name: "新碟上市",
          path: "/discover/album",
          target: "",
          actived: false,
        },
      ],
    },
    { name: "我的音乐", path: "/my", target: "", actived: false },
    { name: "关注", path: "/friend", target: "", actived: false },
    {
      name: "商城",
      path: "https://music.163.com/store/product",
      target: "_blank",
      actived: false,
    },
    {
      name: "音乐人",
      path: "https://music.163.com/st/musician",
      target: "_blank",
      actived: false,
    },
    {
      name: "云推歌",
      path: "https://music.163.com/st/ad-song/login",
      target: "_blank",
      actived: false,
    },
    { name: "下载客户端", path: "/download", target: "", actived: false },
  ];
  const { pathname } = useLocation();
  const [menus, setMenus] = useState(initMenu);
  useEffect(() => {
    // 根据当前路由选中菜单
    const temp = initMenu.map((item) => ({
      ...item,
      actived: item.path === pathname,
    }));
    setMenus(temp);
  }, [pathname]);
  // 选中菜单 处理选中样式
  const handleMenu = (index: number) => {
    const newMenu: any = menus.map((item, i) => ({
      ...item,
      actived: i === index,
    }));
    setMenus([...newMenu]);
  };
  return (
    <>
      <MenuStyles>
        {menus.map((item, index) => (
          <li key={item.name} onClick={() => handleMenu(index)}>
            <NavLink
              className={item.actived ? "menu actived" : "menu "}
              to={item.path}
              target={item.target}
            >
              {item.name}
            </NavLink>
            {item.actived && <div className="triangle-up"></div>}
          </li>
        ))}
      </MenuStyles>
    </>
  );
}
