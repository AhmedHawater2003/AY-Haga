import "./SearchResultsList.css";
import SearchResult from "./SearchResult";

export const SearchResultsList = ({ data, onSearchResultSelection, resultLabellKey,
  styling = {
      width: "75%",
      backgroundColor: "#fffffc",
      display: "flex",
      flexDirection: "column",
      borderRadius: "10px",
      maxHeight: "300px",
      overflowY: "auto",
      position: "absolute",
      zIndex: "1000",
      top: "5rem",
  }
 }) => {
  return (
    <div style={styling}>
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
