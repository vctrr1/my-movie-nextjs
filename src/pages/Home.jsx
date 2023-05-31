import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API

const Home = () => {
    const [topRatedMovies, setTopRated] = useState([])

    const getTopRaded = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopRated(data.results)
        console.log(data)

    }

    useEffect(() => {
        const topRatedURL = `${moviesURL}top_rated?${apiKey}`
        getTopRaded(topRatedURL)
    },[])

    return (
        <div className="container">
            <h2 className="title">Filmes Melhores Avaliados</h2>
            <div className="movies-container">
                {topRatedMovies.length === 0 && <p>Carregando...</p>}
                {
                    topRatedMovies.map((movie) => 
                        <p key={movie.id}>{movie.title}</p>
                    )
                }
            </div>
        </div>
    )
}

export default Home;