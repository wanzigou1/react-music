import styled from "styled-components";
import download from "@/assets/download.png";
export const BannerStyles = styled.div`
  .slick-arrow {
    &::after {
      width: 25px;
      height: 25px;
    }
  }

  .dots-style {
    margin-left: -300px;
    li {
      margin: 0 8px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      button {
        width: 6px;
        height: 6px;
        opacity: 0.5;
        &:hover {
          background: #a40011;
        }
      }
    }
    li.slick-active button {
      background: #a40011;
    }
  }
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