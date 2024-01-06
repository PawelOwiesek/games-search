import { Container, Logo, StyledLink } from "./styled";
import Search from "./search";

const Navigation = () => {
  return (
    <Container>
      <Logo />
      <StyledLink to="/">Games</StyledLink>
      <StyledLink to="/something">Something</StyledLink>
      <Search />
    </Container>
  );
};

export default Navigation;
