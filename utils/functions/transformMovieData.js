export function transformMovieData(rowData) {
  const imgPath = rowData.backdrop_path;
  const title = rowData.original_title;
  const posterPath = rowData.poster_path;
  const imdbRating = rowData.vote_average;
  const overview = rowData.overview;
  const tagline = rowData.tagline;
  const genres = rowData.genres;
  const duration = rowData.runtime;
  const id = rowData.id;

  const releaseDateArr = rowData.release_date.split("-");

  const releaseDate = {
    year: releaseDateArr[0],
    month: releaseDateArr[1],
    day: releaseDateArr[2],
  };

  return {
    id,
    imgPath,
    title,
    posterPath,
    imdbRating,
    overview,
    tagline,
    genres,
    duration,
    releaseDate,
  };
}
