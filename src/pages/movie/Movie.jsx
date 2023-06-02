import { useEffect, useState } from "react";
//import {GiMoneyStack} from 'react-icons/fa'
import { useParams } from "react-router-dom"; //regata algum elemento da url no caso o ID movie
import {AiFillStar} from 'react-icons/ai'
import './Movie.css'

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API
const imageURL = import.meta.env.VITE_IMG

const Movie = () => {

  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovie(data)

  }

  useEffect(() => {
      const movieURL = `${moviesURL}${id}?${apiKey}`
      getMovies(movieURL)
  },[id])

  return <div className="movie">{movie && <>
    <img src={imageURL + movie.poster_path} alt={movie.title} className="imgMovie"/>
    <div className="details">
      <h1 className="movieTitle">{movie.title}</h1>
      <span> Sinopse: {movie.overview}</span>
      <span>Data de Lançamento: {movie.release_date}</span>
      <button><AiFillStar/></button>
    </div>
  </>}</div>;
};

export default Movie;
