import "./SearchResultsList.css";
import SearchResult from "./SearchResult";

export const SearchResultsList = ({ data, onSearchResultSelection, resultLabellKey }) => {
  return (
    <div className="results-list shadow">
      {data.map((resultData) => {
        return (
          <SearchResult
            key={resultData["id"]}
            resultData={resultData}
            onClick={onSearchResultSelection}
            label={resultData[resultLabellKey]}
          />
        );
      })}
    </div>
  );
};

export default SearchResultsList;
