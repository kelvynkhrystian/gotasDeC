import styled from "styled-components";

export const OrderStyles = styled.main`

  align-items: center;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  width: 85%;

  h1 {
    text-align: center;
    width: 95%;
  }

  img {
    width: 100px;
  }

  article {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 95%;
  }

  article:nth-child(3) {
    width: 50%;
}


  @media (max-width:600px) {
    body {
      /* background-color: blue; */
    };
  }
`;