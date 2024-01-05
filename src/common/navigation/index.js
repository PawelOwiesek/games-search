import { Container, Logo, StyledLink } from "./styled";
import Search from "./search";

const Navigation = () => {
  return (
    <Container>
      <Logo />
      <StyledLink to="/">Games</StyledLink>
      <Search />
    </Container>
  );
};

export default Navigation;
