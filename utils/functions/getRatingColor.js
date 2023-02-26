export const getRatingColor = function (rating) {
  const color =
    rating >= 8
      ? "dark-green"
      : rating >= 7
      ? "green"
      : rating >= 6
      ? "yellow"
      : rating >= 5
      ? "dark-yellow"
      : rating > 0
      ? "red"
      : "gray";

  return color;
};
