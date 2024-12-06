import styled from "styled-components";
export const Foot = styled.div`
  position: fixed;
  left: 0;
  // top: 0;
  bottom: 0;
  right: 0;
  height: 0;
  zoom: 1;
  .play-container {
    width: 100%;
    height: 60px;
    position: absolute;
    background: rgb(51, 51, 51);
    transition: 0.3s ease-out;
    box-shadow: 20px 20px 20px 20px #6c6c6c;
  }
  .icon-box {
    width: 20px;
    height: 20px;
    position: absolute;
    // top: -20px;
    right: 5px;
    background: rgb(51, 51, 51);

    .icon {
      font-size: 20px;
      color: #fff;
    }
  }
`;
