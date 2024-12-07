import styled from "styled-components";
import download from "@/assets/download.png";
export const BannerStyles = styled.div`
  .banner {
    display: flex;
    justify-content: center;
  }
  img {
    width: 730px;
    height: 285px;
  }
  .download {
    width: 254px;
    height: 285px;
    cursor: pointer;
    background: url(${download}) no-repeat 0 0;
  }
`;
