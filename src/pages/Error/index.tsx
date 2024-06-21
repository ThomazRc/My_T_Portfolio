import { Link } from "react-router-dom";
import { StyledSection } from "./style";

export const ErrorPage = () => {
  return (
    <>
    <main>
    <StyledSection>
    <h1>Ops...</h1>
    <p>Esta página não existe</p>
    <Link to="/">Voltar</Link>
    </StyledSection>
    </main>
    </>
  );
};
