import styled from "styled-components";
export const Child = styled.li`
  display: flex;
  .left {
    width: 60px;
  }
  .right {
    flex: 1;
    padding: 10px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
`;
