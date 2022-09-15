import axios from "axios";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm(); //2

  const onSubmit = async (values) => {
    values.popularity = +values.popularity;
    const res = await axios.post("http://localhost:4000/movies", values);
    console.log(res.data);
  };
  return (
    <fieldset>
      <legend>Movies-Catalog</legend>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Enter Title: </label>
        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="Enter the movie name"
        />
        <br />
        <label htmlFor="popularity">Enter Popularity: </label>
        <input
          type="number"
          {...register("popularity", { required: true, min: 0, max: 10 })}
          placeholder="Enter the popularity"
        />
        <br />
        <label>Enter the url for movie img: </label>
        <input type="text" {...register("imageUrl", { required: true })} />
        <br />
        <label>Description: </label>
        <textarea
          {...register("description", { required: true, minLength: 5 })}
        ></textarea>
        <button>Enter Movie</button>
      </form>
    </fieldset>
  );
};
export default App;
