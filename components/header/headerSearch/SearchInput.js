import styles from "./SearchInput.module.css";
import { useEffect } from "react";

import { useHttpQuerySearch } from "@/utils/hooks/use-http-query-search";
import { useQueryInput } from "@/utils/hooks/use-query-input";

import SearchResults from "./SearchResults";

function SearchInput() {
  const { results, setResults, makeRequest, error, loading } =
    useHttpQuerySearch();
  const { inputValue, isFocusing, changeHandler, focusHandler, blurHandler } =
    useQueryInput();

  useEffect(() => {
    const search = setTimeout(() => {
      makeRequest(inputValue);
    }, 1000);

    if (inputValue.length === 0) setResults([]);

    return () => clearTimeout(search);
  }, [inputValue, makeRequest]);

  return (
    <div className={styles.container}>
      <input
        value={inputValue}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        className={styles.input}
        type="text"
        placeholder="Search for millions of movies"
      />
      {isFocusing && inputValue.length > 0 && (
        <SearchResults loading={loading} error={error} results={results} />
      )}
    </div>
  );
}

export default SearchInput;
