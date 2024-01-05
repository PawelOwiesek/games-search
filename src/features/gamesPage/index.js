import React, { useEffect, useState } from "react";
import { fetchData } from "../fetchApiData";
import Pagination from "../../common/pagination";

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
    <>
      <div>
        <ul>
          {games.length > 0 ? (
            games.map((game) => <li key={game.id}>{game.name}</li>)
          ) : (
            <li>No games available</li>
          )}
        </ul>
      </div>{" "}
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
};

export default GamesPage;
