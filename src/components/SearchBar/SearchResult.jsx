import "./SearchResult.css";

export const SearchResult = ({ resultData, onClick, label }) => {
  return (
    <div
      className="search-result"
      onClick={() => onClick(resultData)}
    >
      {label}
    </div>
  );
};

export default SearchResult;
