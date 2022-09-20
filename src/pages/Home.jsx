import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";

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
    <div className="home">
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <img src="https://placekitten.com/200/300" />
          <div className="card-body">
            <h3>{movie.title}</h3>
            <span>⭐{movie.popularity}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
