import { Link } from "react-router-dom";

function Movie_Box({ movie_data }) {

    return (

        <Link to={`/movie-details/${movie_data.id}`} className="h-full w-auto">

            <div className="movie-box h-full w-[10rem] flex-shrink-0 flex items-center justify-between flex-col gap-1">

                <img className="movie-image h-full w-auto" src={movie_data.poster} alt={movie_data.name} />

            </div>

        </Link>

    );

};

export default Movie_Box;