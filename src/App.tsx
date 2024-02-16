import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { MovieDisplay } from "./components/MovieDisplay";
import { getMovie } from "./utils/apiUtils.ts";

function App() {
  const [movie, setMovie] = useState<any>(null);

  const searchMovie = async (searchTerm: string) => {
    try {
      const movieData = await getMovie(searchTerm);
      setMovie(movieData);
    } catch (error) {
      console.error("Error searching for movie:", error);
    }
  };

  useEffect(() => {
    searchMovie("White Chicks");
  }, []);

  return (
    <>
      <h1>Movie Search</h1>
      <Form searchHandler={searchMovie} />
      <MovieDisplay movie={movie} />
    </>
  );
}

export default App;
