import styled from "styled-components";

export const OrderConfirmStyles = styled.main`

  align-items: center;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
  width: 90%;
  padding: 10px;

  h3 {
    width: 90%;
    margin-bottom: 25px;
  }

  input {
    font-size: large;
    padding: 10px 5px;
    height: 40px;
    width: 95%;
  }

  span {
    color: #fff;
    background-color: #077515;
    border-radius: 5px;
    padding: 5px 10px;
  }

  section {
    
    width: 90%;
    margin-bottom: 25px;

    h1 {
      align-items: center;
      border-bottom: 1px solid #45322E;
      padding: 10px;
      margin-top: 25px;
      padding-bottom: 20px;
      text-align: center;
    }

    div {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }

    p {
      font-weight: bolder;
    }

    div > h2 {
      /* color: brown; */
      font-weight: bolder;
    }
  }

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
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    a {
      border: none;
      border-radius: 5px;
      width: 45%;
    }

    button {
      align-items: center;
      background-color: #45322E;
      border: none;
      border-radius: 5px;
      color: #fff;
      display: flex;
      justify-content: center;
      font-family: 'Tilt Warp', cursive;
      font-size: 1.05em;
      height: 40px;
      width: 100%;

      span {
        background-color: transparent;
        padding: 0;
        font-size: 1.2em;
        margin-left: 10px;
      }

    }

    a:nth-child(2) {

      text-decoration: none;

      button:nth-child(1) {

        align-items: center;
        background-color: #149e27;
        display: flex;
        justify-content: center;
        text-decoration: none;

        img {
          margin-left: 5px;
          margin-bottom: 0;
          width: 25px;
        }
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

  @media (max-width:600px) {
    body {
      
    };
  }
`;