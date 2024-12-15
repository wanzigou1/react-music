import styled from "styled-components";
import foot_icon from "@/assets/foot_icon.png";
interface CustomDivProps {
  position?: string;
  activedposition?: string;
}
export const Foot = styled.div`
  .foot-container {
    padding: 33px 0;
    display: flex;
    justify-content: center;
    .icons {
      width: 980px;
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    }
  }
  .play-wrap {
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
  }
`;
export const IconBg = styled.div<CustomDivProps>`
  width: 45px;
  height: 45px;
  background-image: url(${foot_icon});
  background-size: 220px 220px;
  background-position: ${(props) => props.position};
  margin-bottom: 10px;
  &:hover {
    background-position: ${(props) => props.activedposition};
  }
`;
