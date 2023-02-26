import React from "react";
import styles from "./SearchResults.module.css";

import HeaderResultItem from "./SearchResultItem";
import LoadingSpinner from "../../ui/LoadingSpinner";

function SearchResults({ results, loading, error }) {
  if (loading)
    return (
      <div className={styles.container}>
        <LoadingSpinner />
      </div>
    );

  if (error)
    return (
      <div className={styles.container}>
        <p className={styles.message}>Can't find movies</p>
      </div>
    );

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {results.map((result) => (
          <HeaderResultItem key={result.id} movie={result} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
