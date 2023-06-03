import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; //regata algum elemento da url no caso o ID movie
import{FaRegStar} from 'react-icons/fa'
import {
  BsGraphUp,
  BsWallet2,
  BsClock,
  BsCalendarWeek,
} from "react-icons/bs";
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
    console.log(data)
    setMovie(data)

  }

  useEffect(() => {
      const movieURL = `${moviesURL}${id}?${apiKey}`
      getMovies(movieURL)
  },[id])

  const formatCurrency = (number) => {
    return number.toLocaleString("en-us", {
      style: "currency",
      currency: "USD"
    })
  }

  const fateFormated = () => {
    const dateOrig = movie.release_date
    const timesTemp = Date.parse(dateOrig)
    const date = new Date(timesTemp)
    const formatedDate = Intl.DateTimeFormat('pt-br', {
      dateStyle: "medium"
    })
    return formatedDate.format(date)
  }

  const minutsToHours = (minutos) => {
    const horas = Math.floor(minutos / 60)
    const min = minutos % 60

    const horasF = horas < 10 ? `${horas}` : horas
    const minutosF = min < 10 ? `O${min}` : min
    return `${horasF}:${minutosF}`
  }

  const vote= movie?.vote_average
  return <div className="movie">{movie && <>
    <img src={imageURL + movie.poster_path} alt={movie.title} className="imgMovie"/>
    <div className="details">
      <div className="movieTitle">
        <h1>{movie.title}</h1>
        <p>{movie.tagline}</p>
      </div>
      <h3> Sinopse: {movie.overview}</h3>
      <h3><FaRegStar/> Avaliação: {vote.toFixed(1)}</h3>
      <h3><BsCalendarWeek/> Data de Lançamento: {fateFormated()}</h3>
      <h3><BsClock/> Duração: {minutsToHours(movie.runtime)} H</h3>
      <h3><BsWallet2/> Orçamento: {formatCurrency(movie.budget)}</h3>
      <h3><BsGraphUp/> Faturamento: {formatCurrency(movie.revenue)}</h3>
      <div className="buttonsMovie">
        <Link to={'/favorits'}>
          <button className="buttonFV">Favoritar</button>
        </Link>
        <Link to={'/'}>
          <button className="buttonFV">Voltar</button>
        </Link>
      </div>
    </div>
    </>}
    </div>;
};

export default Movie;
