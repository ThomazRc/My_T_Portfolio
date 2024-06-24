import { Link } from "react-router-dom";
import { StyledMain } from "./style";

export const ErrorPage = () => {
  return (
    <StyledMain>
      <section>
        <button>Pt-br</button>
        <h1>Ops...</h1>
        <p>Esta página não existe</p>
        <Link to="/">Voltar</Link>
      </section>
    </StyledMain>
  );
};
