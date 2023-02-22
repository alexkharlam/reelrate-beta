import { useInputSearch } from "@/utils/hooks/use-input-search";
import { useHttpSearch } from "@/utils/hooks/use-http-search";
import React, { useEffect } from "react";
import styles from "./SearchInput.module.css";

import HeaderResults from "./HeaderResults";
import { API_KEY } from "@/utils/config/movies-api";

function SearchInput() {
  const { results, setResults, makeRequest, error, loading } = useHttpSearch();
  const { inputValue, isFocusing, changeHandler, focusHandler, blurHandler } =
    useInputSearch();

  useEffect(() => {
    const search = setTimeout(() => {
      makeRequest(inputValue);
    }, 1000);

    // async function getConfig() {
    //   const response = await fetch(
    //     `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
    //   );
    //   const data = await response.json();
    //   console.log(data);
    // }
    // getConfig();

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
        placeholder="Search over 2m movies"
      />
      {isFocusing && inputValue.length > 0 && (
        <HeaderResults loading={loading} error={error} results={results} />
      )}
    </div>
  );
}

export default SearchInput;
