import "./Favorits.css";
import movies from "../../server/data.json";
import MovieCard from "../../components/movieCard/MovieCard";

const Favorits = () => {
  const data = Object.values(movies);

  const deleteMovieFromFavorits = (key) => {
    fetch(`http://localhost:4100/db/delete-movie/${key}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Objeto JSON deletado com sucesso.");
        } else {
          console.error("Erro ao deletar o objeto JSON:", response.status);
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
      });
  };

  return (
    <div className="container">
      <h2 className="titleFav">Favoritos</h2>
      <div className="favorits-movies">
        {data.map((item, index) => (
          <div className="movie-card" key={index}>
            <MovieCard movie={item} key={item.id} />
            <p>
              <button
                className="buttonUFavorit"
                onClick={() => deleteMovieFromFavorits(item.id)}
              >
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
