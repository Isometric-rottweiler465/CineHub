import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context_API } from "../App";
import Movie_Box from "../components/Movie_Box";

function Search() {

    const { movies_collection } = useContext(Context_API);
    const { query, genre } = useParams();

    let searched_movies = movies_collection.filter((movie) => {
        return movie.name.toLowerCase().includes(query.toLowerCase());
    });

    let current_genre = genre ? genre.toLowerCase() : "all";

    if (current_genre !== "all") {
        searched_movies = searched_movies.filter((movie) => {
            return movie.genre.toLowerCase() == current_genre;
        });
    };

    if (searched_movies.length == 0) {
        return (

            <h1 className="loading-movie h-[80vh] w-full text-3xl flex items-center justify-center">No Movies Found</h1>

        );
    };

    return (

        <div className="search min-h-[80vh] w-full flex items-start justify-evenly gap-3 p-3 flex-wrap">

            {

                searched_movies.map((movie) => {

                    return (

                        <Movie_Box key={movie.id} movie_data={movie} />

                    );

                })

            }

        </div>
    );

};

export default Search;