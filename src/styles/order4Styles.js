import styled from "styled-components";

export const Order4Styles = styled.main`

  align-items: center;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: 'Tilt Neon', cursive;
  width: 90%;
  padding: 10px;

  h1 {
    font-size: x-large;
    text-align: center;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  img {
    border-radius: 10px;
    width: 70px;
  }

  article {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  article:nth-child(3) {
    align-items: center;
    /* background-color: #077515; */
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;

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
    padding: 10px 5px;
    font-weight: bolder;
    width: 150px;
  }

  label.selected {
    border-radius: 10px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  }

  label > div {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  p {
    background-color: #45322E;
    border-radius: 5px;
    color: #fff;
    padding: 6px;
    margin: 2px;
  }

  div > p:nth-child(2) {
    background-color: #077515;
  }



  @media (max-width:600px) {
    body {
      /* background-color: blue; */
    };
  }
`;