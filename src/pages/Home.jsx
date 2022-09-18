import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
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
    <div className="home-layout">
      {movies.map((movie) => (
        <div className="card" key={movie.id}>
          <img className="card-img" src="https://placekitten.com/200/300" />
          <div className="card-body">
            <h3 className="card-title">{movie.title}</h3>
            <span className="card-pop">
              <BsFillStarFill />
              {movie.popularity}
            </span>
            <p className="card-desc">{movie.description}</p>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
