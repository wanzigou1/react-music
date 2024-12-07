import styled from "styled-components";
export const Header = styled.div`
  background: #242424;
  .header-container {
    display: flex;
    width: 1100px;
    height: 70px;
    margin: 0 auto;
  }
`;
export const Container = styled.div`
  min-height: 5px;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  display: flex;
  justify-content: center;
  .sub-nav {
    width: 1100px;
    display: flex;
    margin-left: 360px;
    &-text {
      font-size: 12px;
      height: 20px;
      line-height: 21px;
      padding: 0 13px;
      margin: 7px 17px;
      color: #fff;
      border-radius: 20px;
      cursor: pointer;
    }
  }
  .actived {
    background: #9b0909;
  }
`;
