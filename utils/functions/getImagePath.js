export function getImagePath(url, width = "original") {
  return `http://image.tmdb.org/t/p/w${width}/${url}`;
}
