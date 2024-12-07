import { Outlet } from "react-router-dom";
import { ContentStyles } from "./index.styles";
export default function Content() {
  return (
    <ContentStyles>
      <Outlet></Outlet>
    </ContentStyles>
  );
}
