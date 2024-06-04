import { Link } from "react-router-dom";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <img src="/src/assets/logoT.png" alt="Logo-Assinatura" />
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
