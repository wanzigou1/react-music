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
      .item {
        display: flex;
        .right {
          flex: 1;
          border-top: 1px solid #ccc;
          border-left: 1px solid #ccc;
        }
      }
    }
  }
  .hide {
    display: none;
  }
`;
