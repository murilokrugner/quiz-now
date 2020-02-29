import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const BoxItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: 50px;
    font-weight: bold;

    color: #49aeeb;
  }
`;

export const Box = styled.div`
  display: flex;
  margin: 50px;
  width: 300px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  position: relative;

  div.boxitem {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
    }

    strong {
      font-size: 18px;
      font-weight: bold;
    }

    button {
      border: 0px;
      border-radius: 30px;

      width: 100px;
      height: 30px;

      background: #49aeeb;
      color: #ffffff;

      font-weight: bold;
      font-size: 15px;
    }
  }
`;
