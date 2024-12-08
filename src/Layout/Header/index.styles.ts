import styled from "styled-components";
export const Header = styled.div`
  background: #242424;
  .header-container {
    display: flex;
    align-items: center;
    width: 1100px;
    height: 70px;
    margin: 0 auto;
  }
  .input-container {
    width: 158px;
    height: 32px;
    .ant-input-outlined {
      font-size: 12px;
      line-height: 22px;
      border-radius: 32px;
    }
  }
  .btn-l {
    color: #ccc;
    font-size: 12px;
    background: #242424;
    border: 1px solid #4f4f4f;
    border-radius: 32px;
    margin-left: 12px;
  }
  .btn-r {
    color: #787878;
    font-size: 12px;
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
