import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--secondary-color);

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  img {
    width: 110px;
    height: 110px;
  }

  ul {
    list-style: none;
    font-weight: bold;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: var(--secondary-color);
  }

  a:hover {
    color: var(--secondary-color);
    transition: 0.4s;
  }
`;
