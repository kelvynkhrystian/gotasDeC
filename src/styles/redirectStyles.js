import styled from "styled-components";

export const RedirectStyles = styled.main`

align-items: center;
  background-color: white;
  border-radius: 10px;
  color: #45322E;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: 'Tilt Neon', cursive;
  height: 70%;
  width: 90%;
  padding: 10px;

  img {
    width: 200px;
  }

  h3 {
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 1.1em;
  }

  span {
    font-size: 2.5em;    
  }
  

  @media (min-width:600px) {
    width: 40%;
  }
`;