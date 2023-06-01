import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; //permite pegar a query string 
import MovieCard from '../../components/movieCard/MovieCard'
import '../search/Search.css'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY



const Search = () => {

    const [searchParams] = useSearchParams() //tem que envolver entre [] pq o use params retorna um array de obj
    const[movie, setMovies] = useState([])
    const query = searchParams.get("q")

    const getMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)

    }

    useEffect(() => {
        const searchQueryMoviesURL = `${searchURL}${query}&${apiKey}`

        getMovies(searchQueryMoviesURL)

    },[query])

    return (
        <div className="container">
            <h2 className="titleSearch">Pesquisando: <span className="textSearch">{query}</span></h2>
            <div className="movies-container">
                {movie.length === 0 && <p>Carregando...</p>}
                {
                    movie.map((movie) => 
                        <MovieCard movie={movie} key={movie.id}/>
                    )
                }
            </div>
        </div>
    )
}

export default Search;