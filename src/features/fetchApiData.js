import axios from "axios";
const APIKEY = "b3b8853fc3674315b41a4bfbc5e13d4b";

export const fetchData = async ({ currentPage }) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${APIKEY}&page=${currentPage}&page_size=20`
    );

    return {
      results: response.data.results,
      count: response.data.count,
    };
  } catch (error) {
    console.error("Data download error:", error);
  }
};
