import styled from "styled-components";
export const ContentStyles = styled.div`
  position: relative;
  .card {
    width: 220px;
    height: 300px;
    padding: 12px;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    z-index: 1;
    top: 40px;
    .box {
      display: flex;
      .right {
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
      }
    }
  }
  .hide {
    display: none;
  }
`;
