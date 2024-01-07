import { useEffect, useState } from "react";
import { fetchData } from "../fetchApiData";
import Pagination from "../../common/pagination";
import GameTile from "../../common/gameTile";
import { Container } from "./styled";

const GamesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [games, setGames] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await fetchData({ currentPage });
        setGames(data.results);
        setTotalPages(data.count);
      } catch (error) {
        console.error("Data download error:", error);
      }
    };

    fetchDataFromApi();
  }, [currentPage]);

  return (
    <Container>
      {games.length > 0 ? (
        games.map((game) => (
          <GameTile
            id={game.id}
            game={game}
            name={game.name}
            image={game.background_image}
          />
        ))
      ) : (
        <li>No games available</li>
      )}
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default GamesPage;
