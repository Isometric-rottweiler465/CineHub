import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context_API } from "../App";

function Movie_Streaming({ }) {

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

        <>

            <iframe className="movie-streaming min-h-[80vh] w-full" src={current_movie.streaming_url}></iframe>

        </>

    );

};

export default Movie_Streaming;