const API_KEY=process.env.REACT_APP_API_KEY;

const request={
    fetchingTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchingNetflexOriginal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchingTopRated:`/movie/top_rated?api_key=${API_KEY}&pages=1`,
    fetchingActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchingComdeyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchingHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchingRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchingDocumentryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchingTvShow:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default request;