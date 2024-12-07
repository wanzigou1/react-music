import styled from "styled-components";
export const ErrorStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .error-svg {
    margin-top: 18px;
    width: 500px;
    height: 500px;
  }
  .error-title {
    color: #000;
    font-size: 20px;
  }
  .go-back {
    background: #e60026;
    color: #f5f5f5;
    margin-top: 12px;
  }
  .go-back-title {
    color: #333;
    font-size: 16px;
  }
`;
