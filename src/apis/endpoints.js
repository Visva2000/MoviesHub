import domains from "./domains";

const END_POINTS = {
    get_popular_movies:`${domains.movies}/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`,
    get_search_movies:`${domains.movies}/search/movie?api_key=cfe422613b250f702980a3bbf9e90716`,

}
export default END_POINTS