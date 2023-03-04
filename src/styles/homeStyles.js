import styled from "styled-components";

export const HomeStyles = styled.main`

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  
  img {
    width: 300px;
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  div > img {
    width: 50px;
  }

  button {
    border-radius: 10px;
    background-color: transparent;
    height: 50px;
    width: 100%;
  }

  @media (max-width:600px) {
    body {
      /* background-color: blue; */
    };
  }
`;