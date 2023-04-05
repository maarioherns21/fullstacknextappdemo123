import { FC, useEffect, useState } from "react";

interface Movie {
  name: string;
  creator: string;
  body: string;
  image: string;
}

const mainPage: FC<Movie> = () => {
  const [movies, setMovies] = useState([]);

  const fetchData: () => Promise<void> = async () => {
    try {
      const res: Response = await fetch("http://localhost:3000/api/movies");
      const data: any = await res.json();
      console.log(data);
      setMovies(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {movies.map((movie: any) => (
        <div key={movie._id}>
          <h1>{movie.name}</h1>
          <h2>{movie.body}</h2>
          <h3>{movie.creator}</h3>
        </div>
      ))}
    </>
  );
};

export default mainPage;
