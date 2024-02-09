import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

function Show() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=92f8b1ba9a04a87d7a3184d57bf090e9`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <div className="container mt-4 mb-4 d-flex " style={{ Height: "300vh", backgroundColor: "#2554" }}>
      <div className="row">
        <div className="col-md-8-center">
          {movie ? (
            <div className="text-center bg-info  p-3">
              <h1 className="text-light">{movie.title}</h1>
              <p className="text-light">{movie.overview}</p>
              <p className="text-light">Released: {movie.release_date}</p>
              <p className="text-light">Language: {movie.original_language}</p>
  
              <hr className="text-light" />
              {movie.backdrop_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                  className="img-fluid rounded"
                />
              )}
            </div>
          ) : (
            <div className="text- mt-5">
              <h2>Loading...</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
          }


export default Show; 