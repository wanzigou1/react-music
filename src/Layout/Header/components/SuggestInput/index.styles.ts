import styled from "styled-components";
export const ContentStyles = styled.div`
  position: relative;
  .card {
    width: 240px;
    height: 300px;
    /* padding: 12px; */
    background: #fff;
    border-radius: 8px;
    position: absolute;
    z-index: 1;
    top: 40px;
    .box {
      width: 100%;
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
