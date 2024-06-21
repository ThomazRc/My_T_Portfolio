import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StyledHomeMain } from "./style";

export const HomePage = () => {
  return (
    <>
      <Header />
      <StyledHomeMain>
        <h1>main</h1>
      </StyledHomeMain>
      <Footer />
    </>
  );
};
