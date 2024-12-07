import styled from "styled-components";
export const MenuStyles = styled.ul`
  display: flex;
  li {
    position: relative;
  }
  .menu {
    display: inline-block;
    height: 100%;
    font-size: 14px;
    color: #ccc;
    padding: 0 19px;
    line-height: 70px;
    text-decoration-line: none;
    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
  .actived {
    color: #fff;
    background-color: #000;
  }
  .triangle-up {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 7px solid #c20c0c;
  }
`;
