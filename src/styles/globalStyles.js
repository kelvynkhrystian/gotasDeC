import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-x: hidden;
    height: 100vh;
    width: 100%;
  }

  body {
    align-items: center;
    color: black;
    background-color: #fac2c7;
    /* background-color: #fbe0de; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    display: none;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease;
  }

  .transitionBox {
    align-items: center;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  button.disabled {
    pointer-events: none;
    opacity: 0.5;
    cursor: not-allowed;
  }


  @media (min-width:600px) {
    body {
      /* background-color: blue; */
    };
  }
`;

export default GlobalStyle;
