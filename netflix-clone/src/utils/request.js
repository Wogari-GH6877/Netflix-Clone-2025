const API_KEY=process.env.REACT_APP_API_KEY;

const request={
    fetchingTrending:`/trending/all/week?api_key={API_KEY}&language=en-US`,
    fetchingUpComingMovie:`/movie/upcoming?api_key={API_KEY}&language=en-US&page=1`,
    fetchingTopRated:`/movie/top_rated/?api_key={API_KEY}&language=en-US`,
    fetchingActionMovies:`/genre/movie/list?api_key={API_KEY}&genres=28`,
    fetchingComdeyMovies:`/genre/movie/list?api_key={API_KEY}&genres=35`,
    fetchingHorrorMovies:`/genre/movie/list?api_key={API_KEY}&genres=27`,
    fetchingRomanceMovies:`/genre/movie/list?api_key={API_KEY}&genres=10749`,
    fetchingDocumentryMovies:`/genre/movie/list?api_key={API_KEY}&genres=99`,
    fetchingTvShow:`/tv/popular?api_key={API_KEY}&language=en-US&page=1`,
};

export default request;