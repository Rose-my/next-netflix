export const getSearchedMovies = async (query: string, page: number = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_SEARCH_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
  const res = await fetch(url);
  const searchedMoviesData = await res.json();

  return searchedMoviesData;
};
