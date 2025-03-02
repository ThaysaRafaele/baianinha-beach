import { Link } from "react-router-dom";
import { Banner, Button, Logo, Overlay, SectionWrapper, Subtitle, Title, TitleContainer } from "./styles";

const Home = () => {
  return (
    <SectionWrapper>
      <Banner>
        <Overlay>
          <TitleContainer>
            <Logo src="/src/assets/Baianinha.png" alt="Logo Baianinha Beach" />
            <Title />
          </TitleContainer>
          <Subtitle>Estilo e conforto para seus dias de sol</Subtitle>
          <Button as={Link} to="/produtos">
            Ver Produtos
          </Button>
        </Overlay>
      </Banner>
    </SectionWrapper>
  );
};

export default Home;
