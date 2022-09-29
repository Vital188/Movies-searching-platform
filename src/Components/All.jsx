import Single from "./Single";
import { useEffect, useState } from "react";

function All() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");

  
   const searchMovieFn = () => { fetch(
      `http://api.themoviedb.org/3/search/movie?api_key=5d7e47d09262ced82a2dc3bde5c96ccc&language=en-US&query=${searchMovies}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMovies(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

    }
  const handleChange = (e) => {
    setSearchMovies(e.target.value);
  };

     useEffect (() => {
    if(searchMovies.length> 2)
    {searchMovieFn()}
   }, [searchMovies])

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchMovies}
        onChange={handleChange}
        style={{
          width: "900px",
        }}
      ></input>
      {
      movies?.slice(0,7)?.map((movie)  => (
      <Single  key={movie.id}  movie={movie} />
      ))}
    </div>
  );
}

export default All;
