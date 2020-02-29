import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  background: #49aeeb;

  height: 80px;
  width: 100%;

  div.title {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: #fff;
      font-size: 20px;
    }
  }

  div.avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      height: 50px;
      width: 50px;

      border: 0px;
      border-radius: 30px;
    }

    span {
      display: flex;
      justify-content: center;

      margin-top: 5px;
      color: #fff;

      font-weight: bold;
      font-size: 15px;
    }
  }

  div.Menu {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: flex-start;
  }
`;
