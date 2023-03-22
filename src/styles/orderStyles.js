import styled from "styled-components";

export const OrderStyles = styled.main`

  align-items: center;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: 'Tilt Neon', cursive;
  height: 55%;
  width: 90%;
  padding: 10px;

  h1 {
    font-size: x-large;
    font-weight: bolder;
    text-align: center;
    width: 100%;
  }

  img {
    border-radius: 10px;
    margin-bottom: 10px;
    width: 100px;
  }

  article {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
  }

  article:nth-child(3) {
    align-items: center;
    /* background-color: #077515; */
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    a {
      border: none;
      border-radius: 5px;
      width: 45%;
    }

    button {
      border: 2px solid  #45322E;
      border-radius: 5px;
      background-color: transparent;
      color: #45322E;
      font-family: 'Tilt Warp', cursive;
      font-size: 1.05em;
      padding: 10px;
      width: 100%;

    }

    a:nth-child(2) {
      background-color: #45322E;

      button:nth-child(1) {
        color: #fff;
      }
    }

    button:disabled {
      opacity: 10%;
    }

    button:active {
      transform: scale(0.9);
    }
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
    padding: 20px 10px;
    font-weight: bolder;
  }

  label.selected {
    border-radius: 10px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  }

  label > div {
    display: flex;
    justify-content: space-between;
  }

  p {
    background-color: #45322E;
    border-radius: 5px;
    color: #fff;
    padding: 5px 10px;
    margin: 2px;
  }

  div > p:nth-child(2) {
    background-color: #077515;
  }



  @media (min-width:600px) {
    height: 70%;
    width: 60%;
  }
`;