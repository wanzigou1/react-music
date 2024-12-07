import { createHashRouter } from "react-router-dom";
import ErrorEmpty from "../views/ErrorEmpty";
import App from "../App";
import Discover from "../views/Discover";
import My from "../views/My";
import Song from "../views/Song";
const route = createHashRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "*",
        element: <ErrorEmpty></ErrorEmpty>,
      },
      {
        path: "/",
        element: <Discover></Discover>,
        children: [
          {
            path: "/discover",
            element: <Discover></Discover>,
          },
        ],
      },
      {
        path: "/my",
        element: <My></My>,
      },
      {
        path: "/song",
        element: <Song></Song>,
      },
    ],
  },
]);
export default route;
