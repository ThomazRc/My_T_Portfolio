import styled from "styled-components";

export const StyledMain = styled.main`
   height: 100vh;


  section {
    height: 25rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 50px;
    background-color: aliceblue;

  }

  a {
    text-decoration: none;
    background-color: orange;
    color: red;
    padding: 15px;
    border-radius: 15px;
  }

  a:hover {
    background-color: red;
    color: orange;
    border-radius: 25px;
    transition: 0.8s;
  }
`;
