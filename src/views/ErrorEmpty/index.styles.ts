import styled from "styled-components";
export const ErrorStyles = styled.div`
  background-color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .error-svg {
    height: 360px;
  }
  .error-title {
    color: #000;
    font-size: 20px;
    margin-top: 12px;
  }
  .go-back {
    background: #e60026;
    color: #f5f5f5;
    margin-top: 12px;
  }
  .go-back-title {
    color: #333;
    font-size: 16px;
    line-height: 30px;
  }
`;
