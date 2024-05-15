// now playing 영화 데이터 반환하는 함수.
export async function getNowPlayingMovie() {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
  const nowPlayingMovieResponse = await fetch(url, { cache: 'no-store' });
  
  const nowPlayingMovieData = await nowPlayingMovieResponse.json();
  
  return nowPlayingMovieData.results;
}
  
// popular 영화 데이터 반환하는 함수
export async function getPopularMovie() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
  const popularMovieResponse = await fetch(url, { cache: 'no-store' });
  const popularMovieData = await popularMovieResponse.json();
  
  return popularMovieData.results;
}
  
// top-rated 영화 데이터 반환하는 함수
export async function getTopRatedMovie() {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
  const topRatedMovieResponse = await fetch(url, { cache: 'no-store' });
  const topRatedMovieData = await topRatedMovieResponse.json();

  return topRatedMovieData.results;
}

// Coming 영화 데이터 반환하는 함수
export async function getUpComingMovie() {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
  const upComingMovieResponse = await fetch(url, { cache: 'no-store' });
  const upComingMovieData = await upComingMovieResponse.json();

  return upComingMovieData.results;
}

// 상세 페이지 영화 데이터 반환하는 함수
export const getMovieDetails = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US`;
  const res = await fetch(url);
  const data = await res.json();
  
  return data;
};