export function convertToTens(num) {
  let rating = Math.round(num * 10);

  rating =
    rating <= 0
      ? "0"
      : rating <= 5
      ? "05"
      : rating <= 10
      ? "10"
      : rating <= 15
      ? "15"
      : rating <= 20
      ? "20"
      : rating <= 25
      ? "25"
      : rating <= 30
      ? "30"
      : rating <= 35
      ? "35"
      : rating <= 40
      ? "40"
      : rating <= 45
      ? "45"
      : rating <= 50
      ? "50"
      : "50";

  return rating;
}
