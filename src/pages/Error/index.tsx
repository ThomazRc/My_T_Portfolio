import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
    <section>
    <h1>Error</h1>
    <p>Página Inexistente</p>
    <Link to="/">Voltar</Link>
    </section>
    </>
  );
};
