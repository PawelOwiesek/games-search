import { Input } from "./styled";

const Search = () => {
  const isMobile = window.innerWidth <= 1024;
  const placeholder = isMobile ? "Find game" : "Search for Your favorite game";
  return (
    <div>
      <Input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Search;
