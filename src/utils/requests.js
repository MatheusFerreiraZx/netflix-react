const API_KEY = 'e01d6e1ad0500af29f6e468cb6cb741e';

const requests = {
  fetchTrends: `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?&with_genres=28&language=pt-BR&api_key=${API_KEY}`,
  fetchHorrorMovies: `/discover/movie?&with_genres=27&language=pt-BR&api_key=${API_KEY}`,
  fetchComedyMovies: `/discover/movie?&with_genres=35&language=pt-BR&api_key=${API_KEY}`,
  fetchRomanceMovies: `/discover/movie?&with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
  fetchDocumentaries: `/discover/movie?&with_genres=99&language=pt-BR&api_key=${API_KEY}`,
  fetchAnime: `/discover/movie?}&with_genres=16&language=pt-BR&api_key=${API_KEY}`,
  fetchFantasy: `/discover/movie?&with_genres=14&language=pt-BR&api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
};

export default requests;