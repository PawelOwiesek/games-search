import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDescription, fetchVideo } from "../fetchApiData";

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
    <div
      style={{
        margin: "0 auto",
        width: "1200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <div>
        {videoId && (
          <iframe
            width="800"
            height="600"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>{" "}
      <p
        style={{
          backgroundColor: "#b0bab0",
          textAlign: "center",
          fontSize: "20px",
          lineHeight: "1.4",
          padding: "10px",
        }}
      >
        {description.replace(/<[^>]*>/g, "")}
      </p>{" "}
    </div>
  );
};

export default Description;
