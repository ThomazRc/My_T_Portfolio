import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: aliceblue;

  a {
    text-decoration: none;
    background-color: orange;
    color: red;
    padding: 5px;
    border-radius: 5px;
  }

  a:hover {
    background-color: red;
    color: orange;
  }
`;
