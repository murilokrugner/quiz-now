import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const FooterBox = styled.div`
  display: flex;
  background: #49aeeb;

  height: 80px;
  width: 100%;

  div.signup {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;

    button {
      width: 70px;
      height: 40px;
      margin-right: 10px;

      color: #49aeeb;
      background: #fff;
      border: 0px;
      border-radius: 30px;

      font-weight: bold;
      font-size: 14px;
    }
  }
`;
