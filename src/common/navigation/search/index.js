import { Input } from "./styled";
import { useNavigate, useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("search");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const isMobile = window.innerWidth <= 1024;
  const placeholder = isMobile ? "Find game" : "Search for Your favorite game";

  return (
    <div>
      <Input
        value={query || ""}
        onChange={onInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
