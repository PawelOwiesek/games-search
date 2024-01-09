import axios from "axios";
const APIKEY = "ae89c9d1fb514678ae9ae0002610c1c8";
const TUBEKEY = "AIzaSyA5zv7QwmvMJqjSMoTjmkCIe5XCfumCtEk";
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

export const fetchDescription = async ({ id }) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${APIKEY}`
    );
    return { description: response.data.description };
  } catch (error) {
    console.error("Błąd pobierania opisu gry:", error);
  }
};

export const fetchVideo = async ({ id }) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        `${id} gameplay trailer`
      )}&type=video&key=${TUBEKEY}`
    );
    return { video: response.data };
  } catch (error) {
    console.error("Error downloading YouTube video:", error);
  }
};
