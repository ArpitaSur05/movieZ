import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get("http://localhost:4000/movies");
      console.log(res.data);
      setMovies(res.data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <span>{movie.popularity}</span>
          <img src="https://placekitten.com/200/300" />
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Home;
