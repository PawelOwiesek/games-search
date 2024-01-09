import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDescription, fetchVideo } from "../fetchApiData";
import { AboutGame, Container, Player, Video } from "./styled";

const Description = () => {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const fetchGameDescription = async () => {
      try {
        const data = await fetchDescription({ id });
        setDescription(data.description);
      } catch (error) {
        console.error("Error downloading game description:", error);
      }
    };

    const fetchYoutubeVideo = async () => {
      const cache = {};
      if (cache[id]) {
        setVideoId(cache[id]);
        return;
      }
      try {
        const response = await fetchVideo({ id });
        const firstVideoId = response.video.items[0]?.id?.videoId;

        if (firstVideoId) {
          setVideoId(firstVideoId);
          cache[id] = firstVideoId;
        }
      } catch (error) {
        console.error("Error downloading YouTube video:", error);
      }
    };

    fetchGameDescription();
    fetchYoutubeVideo();
  }, [id, description]);

  return (
    <Container>
      {" "}
      <Player>
        {videoId && (
          <Video
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></Video>
        )}
      </Player>{" "}
      <AboutGame>{description.replace(/<[^>]*>/g, "")}</AboutGame>{" "}
    </Container>
  );
};

export default Description;
