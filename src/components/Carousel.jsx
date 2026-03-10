import The_Nun from "../../public/The-Nun-Banner.jpg";
import The_Housemaid from "../../public/The-Housemaid-Banner.jpg";
import Sex_Tape from "../../public/Sex-Tape-Banner.jpg";
import Ballerina from "../../public/Ballerina-Banner.jpg";
import Interstellar from "../../public/Interstellar-Banner.jpg";
import Resident_Evil from "../../public/Resident-Evil-Banner.jpg";
import I_Know_What_You_Did_Last_Summer from "../../public/I-Know-What-You-Did-Last-Summer-Banner.jpg";
import No_Hard_Feelings from "../../public/No-Hard-Feelings-Banner.jpg";
import The_Mummy from "../../public/The-Mummy-Banner.jpg";
import Polaroid from "../../public/Polaroid-Banner.jpg";

function Carousel() {

    return (

        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">

            <div className="carousel-inner">

                <div className="carousel-item active">

                    <img src={The_Nun} className="d-block m-auto" style={{ height: "30rem" }} alt="The Nun" />

                </div>

                <div className="carousel-item">

                    <img src={The_Housemaid} className="d-block m-auto" style={{ height: "30rem" }} alt="The Housemaid" />

                </div>

                <div className="carousel-item">

                    <img src={Sex_Tape} className="d-block m-auto" style={{ height: "30rem" }} alt="Sex Tape" />

                </div>

                <div className="carousel-item">

                    <img src={Ballerina} className="d-block m-auto" style={{ height: "30rem" }} alt="Ballerina" />

                </div>

                <div className="carousel-item">

                    <img src={Interstellar} className="d-block m-auto" style={{ height: "30rem" }} alt="Interstellar" />

                </div>

                <div className="carousel-item">

                    <img src={Resident_Evil} className="d-block m-auto" style={{ height: "30rem" }} alt="Resident Evil" />

                </div>

                <div className="carousel-item">

                    <img src={I_Know_What_You_Did_Last_Summer} className="d-block m-auto" style={{ height: "30rem" }} alt="I Know What You Did Last Summer" />

                </div>

                <div className="carousel-item">

                    <img src={No_Hard_Feelings} className="d-block m-auto" style={{ height: "30rem" }} alt="No Hard Feelings" />

                </div>

                <div className="carousel-item">

                    <img src={The_Mummy} className="d-block m-auto" style={{ height: "30rem" }} alt="The Mummy" />

                </div>

                <div className="carousel-item">

                    <img src={Polaroid} className="d-block m-auto" style={{ height: "30rem" }} alt="Polaroid" />

                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">

                <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                <span className="visually-hidden">Previous</span>

            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">

                <span className="carousel-control-next-icon" aria-hidden="true"></span>

                <span className="visually-hidden">Next</span>

            </button>

        </div>

    );

};

export default Carousel;