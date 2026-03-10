import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context_API } from "../App";
import Movie_Box from "../components/Movie_Box";

function Explore() {

    const { movies_collection } = useContext(Context_API);
    const { genre } = useParams();

    let all_movies = movies_collection.sort(() => 0.5 - Math.random());

    let filtered_movies = movies_collection.filter((movie) => {
        return movie.genre.toLowerCase() == genre.toLowerCase();
    }).sort(() => 0.5 - Math.random()).slice(0, 10);

    return (

        <>

            <div className="genre-movies-list min-h-[80vh] w-full flex items-start justify-evenly gap-3 p-3 flex-wrap">

                {

                    (

                        genre.toLowerCase() == "all"

                            ?

                            all_movies

                            :

                            filtered_movies

                    ).map((movie) => {

                        return (

                            <Movie_Box key={movie.id} movie_data={movie} />

                        );

                    })

                }

            </div>

        </>

    );

};

export default Explore;