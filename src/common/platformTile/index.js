import React from "react";
import { Platforms } from "./styled";

const PlatformTile = ({ game }) => {
  return (
    <Platforms>
      <h2>Platforms:</h2>{" "}
      <ul>
        {game.platforms.map((platform) => (
          <li key={platform.platform.id}>{platform.platform.name}</li>
        ))}
      </ul>
    </Platforms>
  );
};

export default PlatformTile;
