import { Container, Logo, StyledLink } from "./styled";
import Search from "./search";
import ThemeButton from "../ThemeSlider";

const Navigation = () => {
  return (
    <Container>
      <Logo />
      <StyledLink to="/">Games</StyledLink>
      <StyledLink to="/something">Something</StyledLink>
      <Search />
      <ThemeButton />
    </Container>
  );
};

export default Navigation;
