import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context_API } from "../App";
import Genre from "../components/Genre";

function Movie_Details() {

    const { movies_collection } = useContext(Context_API);
    const { movie_id } = useParams();

    let current_movie = movies_collection.find((movie) => {
        return movie.id == movie_id;
    });

    if (!current_movie) {
        return (

            <h1 className="loading-movie h-[80vh] w-full text-3xl flex items-center justify-center">Loading Movie...</h1>

        );
    };

    return (

        <div className="movie-details h-auto w-full flex items-start justify-center gap-5 p-5">

            <div className="left h-auto w-[30%] flex items-center justify-start flex-col gap-3">

                <img className="movie-image rounded-lg h-[25rem] w-auto" src={current_movie.poster} alt={current_movie.name} />

                <Link className="h-auto w-full" to={current_movie.streaming_url ? `/movie-streaming/${current_movie.id}` : ""}>

                    <button className={`watch-now-button rounded-lg h-auto w-full p-2 bg-[#F4951D] text-black font-bold ${current_movie.streaming_url == "" ? "cursor-not-allowed" : "cursor-pointer"}`} disabled={!current_movie.streaming_url}>Watch Now</button>

                </Link>

                <Link className="h-auto w-full" to={current_movie.download_id ? `https://drive.google.com/uc?export=download&id=${current_movie.download_id}` : ""} target={`${current_movie.download_id ? "_blank" : ""}`}>

                    <button className={`download-button rounded-lg h-auto w-full p-2 bg-[#F4951D] text-black font-bold ${current_movie.download_id == "" ? "cursor-not-allowed" : "cursor-pointer"}`} disabled={!current_movie.download_id}>Download</button>

                </Link>

            </div>

            <div className="right h-auto w-[70%] flex items-center justify-start gap-3 flex-col">

                <h1 className="movie-name h-auto w-full text-3xl text-start font-bold">{current_movie.name}</h1>

                <div className="movie-info h-auto w-full text-[0.8rem] flex items-center justify-start gap-2">

                    <span className="movie-genre rounded-lg p-1 bg-gray-700">{current_movie.genre.charAt(0).toUpperCase() + current_movie.genre.slice(1)}</span>

                    <span className="movie-release-date rounded-lg p-1 bg-gray-700">{current_movie.release_date}</span>

                    <span className="movie-imdb-rating rounded-lg p-1 bg-gray-700">{current_movie.imdb_rating}</span>

                </div>

                <p className="movie-description h-auto w-full text-[0.8rem] text-start">{current_movie.description}</p>

                <Genre genre_type={current_movie.genre} current_movie={current_movie} similar_movies={true} />

            </div>

        </div>

    );

};

export default Movie_Details;