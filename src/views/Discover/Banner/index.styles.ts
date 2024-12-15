import styled from "styled-components";
import download from "@/assets/download.png";
export const BannerStyles = styled.div`
  position: relative;
  overflow: hidden;
  .slick-arrow {
    &::after {
      width: 25px;
      height: 25px;
    }
  }
  .slick-prev {
    left: calc(50% - 550px);
  }
  .slick-next {
    right: calc(50% - 525px);
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
    li.slick-active {
      width: 6px;
      button {
        background: #a40011;
      }
    }
  }
  .banner {
    display: flex;
    justify-content: center;
    img {
      width: 730px;
      height: 285px;
      margin-right: 254px;
    }
  }
  .download {
    width: 254px;
    height: 285px;
    cursor: pointer;
    background: url(${download}) no-repeat 0 0;
    position: absolute;
    top: 0;
    left: calc(50% + 237px);
  }
`;
