import styled from "styled-components";

export const HomeStyles = styled.main`

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  /* opacity: 0.5; */
  
  img {
    animation: pulse 2s ease-in-out infinite;
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
    display: inline-block;
    padding: 10px 20px;
    background-color: #45322E;
    color: white;
    font-family: 'Tilt Warp', cursive;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    /* animation: pulse 2s ease-in-out infinite; */
    height: 50px;
    width: 300px;
  }

  button:active {
    transform: scale(0.9);
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }


  @media (max-width:600px) {
    body {
      /* background-color: blue; */
    };
  }
`;