import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { Context_API } from "../App";
import Movie_Box from "./Movie_Box";

function Genre({ genre_type, current_movie, similar_movies }) {

    const { movies_collection } = useContext(Context_API);

    const random_movies = useMemo(() => {
        if (genre_type.toLowerCase() == "all") {
            return [...movies_collection]
                .sort(() => 0.5 - Math.random())
                .slice(0, 10);
        }
        if (similar_movies) {
            return movies_collection.filter((movie) => {
                return movie.genre.toLowerCase() == genre_type.toLowerCase() && movie.id != current_movie.id;
            }).sort(() => 0.5 - Math.random()).slice(0, 10);
        }
        return movies_collection
            .filter((movie) => {
                return movie.genre.toLowerCase() === genre_type.toLowerCase()
            })
            .sort(() => 0.5 - Math.random())
            .slice(0, 10);
    }, [movies_collection, genre_type, current_movie, similar_movies]);

    return (

        <div className="genre h-auto w-full my-3 p-3 flex items-center justify-center gap-3 flex-col">

            <div className="genre-type-box h-auto w-full flex items-center justify-between">

                <h1 className="genre-type font-bold text-[#F4951D]">{similar_movies ? "Similar Movies" : genre_type}</h1>

                <Link to={`/explore/genre/${genre_type.toLowerCase()}`}>

                    <button className="view-all-button rounded-[50px] bg-[#F4951D] text-black px-2 py-1">View All</button>

                </Link>

            </div>

            <div className="genre-movies-list h-[15rem] w-full flex items-center justify-start gap-3 overflow-x-hidden">

                {

                    random_movies.map((movie) => {
                        return (

                            <Movie_Box key={movie.id} movie_data={movie} />

                        );
                    })

                }

            </div>

        </div>

    );

};

export default Genre;