import "./Favorits.css";
import movies from "../../server/data.json";
import MovieCard from "../../components/movieCard/MovieCard";

const Favorits = () => {
  const data = Object.values(movies);

  return (
    <div>
      {data.map((item) => (
        <MovieCard movie={item} key={item.id} />
      ))}
    </div>
  );
};

export default Favorits;
