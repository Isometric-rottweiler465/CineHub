import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function Genre_List() {

    const { genre, query } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [genre_list, set_genre_list] = useState(["All", "Horror", "Mystery", "Comedy", "Action", "Sci-Fi", "Survival", "Slasher", "Romance", "Adventure", "Supernatural"]);

    let current_genre = genre ? genre.toLowerCase() : "all";

    function change_genre(genre_item) {
        if (location.pathname.startsWith("/search")) {
            navigate(`/search/query/${query}/genre/${genre_item.toLowerCase()}`);
        } else {
            navigate(`/explore/genre/${genre_item.toLowerCase()}`);
        }
    };

    return (

        <>

            <hr />

            <div className="genre-list h-auto w-full flex items-center justify-center gap-3 p-2 overflow-x-auto">

                {

                    genre_list.map((genre_item) => {

                        let is_genre_selected = genre_item.toLowerCase() == current_genre;

                        return (

                            <span key={genre_item} className={`movie-genre rounded-lg h-auto w-auto px-2 py-1 text-[0.7rem] cursor-pointer ${is_genre_selected ? 'bg-[#F4951D] text-black' : 'bg-gray-700'}`} onClick={() => change_genre(genre_item)}>{genre_item}</span>

                        );

                    })

                }

            </div>

            <hr />

        </>

    );

};

export default Genre_List;