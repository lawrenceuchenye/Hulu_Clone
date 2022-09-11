
const API_KEY=process.env.API_KEY;

export default {
    fetchTrending:{
        title:"Trending",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
  fetchTopRated:{
        title:"Top Rated",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies:{
      title:"Action",
      url:`/discover/movies?api_key=${API_KEY}&with_genres=28`
  },
   fetchHorrorMovies:{
         title:"Horror",
         url:`/discover/movies?api_key=${API_KEY}&with_genres=27`
     },
   fetchComedyMovies:{
      title:"Comedy",
      url:`/discover/movies?api_key=${API_KEY}&with_genres=35`
   },
    fetchRomanceMovies:{
     title:"Romance",
     url:`/discover/movies?api_key=${API_KEY}&with_genres=10749`
   },
    fetchMysteryMovies:{
        title:"Mystery",
        url:`/discover/movies?api_key=${API_KEY}&with_genres=9648`
    }
}
