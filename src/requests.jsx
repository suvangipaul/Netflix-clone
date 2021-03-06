const API = "b67a8e388c40cfdb3600ad0be8f36c04";

const requests = { 
    fetchTrending: `/trending/all/week?api_key=${API}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API}&with_genres=99`,

}

export default requests;

