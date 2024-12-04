import { Outlet } from "react-router-dom";
import "./index.less";
// import { useLocation } from "react-router-dom";
export default function Content() {
  // const { pathname } = useLocation();
  return (
    <div className="content">
      <Outlet></Outlet>
      {/* <div className="content-module">
        <Outlet></Outlet>
      </div> */}
    </div>
  );
}
