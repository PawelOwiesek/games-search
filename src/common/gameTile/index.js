import { useState } from "react";
import { fetchDescription } from "../../features/fetchApiData";
import PlatformTile from "../platformTile";
import {
  Container,
  Description,
  Details,
  Image,
  Item,
  List,
  Title,
} from "./styled";

const GameTile = ({ game, id, name, image }) => {
  const [description, setDescription] = useState("");

  const fetchGameDescription = async () => {
    try {
      const data = await fetchDescription({ id });
      setDescription(data.description);
    } catch (error) {
      console.error("Error downloading game description:", error);
    }
  };
  fetchGameDescription();

  return (
    <List>
      <Item key={id}>
        <Container>
          <Title>{name}</Title> <Image src={image} alt={`Screenshot `} />
          <Details>
            <PlatformTile game={game} />
            <Description>
              {" "}
              {description.replace(/<[^>]*>/g, "").slice(0, 350)} ...
            </Description>{" "}
          </Details>
        </Container>
      </Item>
    </List>
  );
};

export default GameTile;
