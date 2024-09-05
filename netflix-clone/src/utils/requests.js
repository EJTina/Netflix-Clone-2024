const API_KEY = "e48b1722d68d46e5996e073679a7a0f0";
// https://api.themoviedb.org/3/movie/550?api_key=e48b1722d68d46e5996e073679a7a0f0

const requests = {


fetchTrending: '/trending/all/week?api_key=${API_KEY}&language=en-US',
fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=213',
fetchTopRatedMovies: '/movie/top_rated?api_ key=S{API KEY}51anguagesen-US', 
fetchActionMovies: '/discover/movie?api_key=${API_KEY}&with_genres=28', 
fetchComedyMovies: '/discover/movie?api_key=${API_KEY}&with_genres=35',
fetchHorrorMovies: '/discover/movie?ap_key=${API_KEY}Swith_genres=27', 
fetchRomanceMovies: '/discover/movie?api_key=${API_KEY}&with_genres=10749', 
fetchDocumentaries: '/discover/movie?ap1_key=${API_KEY}&with_genres=99',

};

export default requests;