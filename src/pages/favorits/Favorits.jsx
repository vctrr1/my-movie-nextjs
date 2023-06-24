import "./Favorits.css";
import movies from "../../server/data.json";
import MovieCard from "../../components/movieCard/MovieCard";

const Favorits = () => {
  const data = Object.values(movies);

  return (
    <div className="container">
      <h2 className="titleFav">Favoritos</h2>
      <div className="favorits-movies">
        {data.map((item, index) => (
          <div className="movie-card" key={index}>
            <MovieCard movie={item} key={item.id} />
            <p>
              <button className="buttonUFavorit" onClick={null}>
                Desfavoritar
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorits;
