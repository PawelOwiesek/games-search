import { useEffect, useState } from "react";
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
        <ul style={{ padding: "0", listStyleType: "none" }}>
          {games.length > 0 ? (
            games.map((game) => (
              <li key={game.id}>
                <div
                  style={{
                    maxWidth: "1400px",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#b0bab0",
                    marginBottom: "100px",
                  }}
                >
                  <p
                    style={{
                      gridColumn: "1/3",
                      justifySelf: "center",
                      fontSize: "20px",
                      color: "#1a1a1a",
                      fontWeight: "700",
                    }}
                  >
                    {game.name}
                  </p>
                  <p style={{ marginLeft: "30px" }}>
                    {" "}
                    <img
                      key={game.id}
                      width="600px"
                      height="450px"
                      src={game.background_image}
                      alt={`Screenshot `}
                    />{" "}
                  </p>
                  <div
                    style={{
                      margin: "30px",
                      fontSize: "20px",
                      color: "#1a1a1a",
                      fontWeight: "700",
                    }}
                  >
                    <p>Platforms:</p>
                    <ul>
                      {game.platforms.map((platform) => (
                        <li key={platform.platform.id}>
                          {platform.platform.name}
                        </li>
                      ))}
                    </ul>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </div>
                </div>
              </li>
            ))
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
