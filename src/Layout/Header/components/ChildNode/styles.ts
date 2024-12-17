import styled from "styled-components";
export const Child = styled.li`
  display: flex;
  overflow: hidden;
  .left {
    padding: 10px;
    width: 50px;
    display: flex;
    line-height: 20px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .right {
    flex: 1;
    /* width: calc(100% - 70px); */
    padding: 10px;
    line-height: 20px;
    overflow: hidden;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    div {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
