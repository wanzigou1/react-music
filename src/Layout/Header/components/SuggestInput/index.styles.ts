import styled from "styled-components";
export const ContentStyles = styled.div`
  position: relative;
  .card {
    width: 240px;
    overflow: hidden;
    border-radius: 8px;
    background: #fff;
    position: absolute;
    z-index: 1;
    top: 40px;
    .title {
      line-height: 20px;
      padding: 10px;
    }
    .box {
      width: 100%;
      & :nth-child(1) {
        .left {
          border-top: 1px solid #ccc;
        }
      }
      & :nth-child(2n) {
        .right {
          background: #f5f5f5;
        }
      }
    }
  }
  .hide {
    display: none;
  }
`;
