import React from "react";
import { Item, List, Platforms } from "./styled";

const PlatformTile = ({ game }) => {
  return (
    <Platforms>
      <h2>Platforms:</h2>{" "}
      <List>
        {game.platforms.map((platform) => (
          <Item key={platform.platform.id}>{platform.platform.name}</Item>
        ))}
      </List>
    </Platforms>
  );
};

export default PlatformTile;
