import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 1px solid var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-bottom: 1.2em;
  }

  span {
    font-weight: bold;
    color: var(--secondary-color);
  }
`;
