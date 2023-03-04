import styled from "styled-components";

export const OrderStyles = styled.main`

  align-items: center;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 90%;
  padding: 5%;

  h1 {
    font-size: x-large;
    text-align: center;
    width: 100%;
  }

  img {
    width: 100px;
  }

  article {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  article:nth-child(3) {
    width: 50%;
  }

  /* HIDE RADIO */
  [type=radio] { 
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  label {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  label.selected {
    border-radius: 10px;
    outline: 5px solid #45322E;
  }


  @media (max-width:600px) {
    body {
      /* background-color: blue; */
    };
  }
`;