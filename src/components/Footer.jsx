import CineHub from "../../public/CineHub.jpg";

function Footer() {

    return (

        <div className="footer h-auto w-full p-[3rem] bg-gray-900 flex items-center justify-center flex-col gap-3">

            <img className="cinehub-icon h-[5rem] w-auto" src={CineHub} alt="CineHub" />

            <p className="footer-paragraph h-auto w-1/2 text-center text-[0.7rem]">

                CineHub is a free streaming platform where you can watch movies for free.
                It has a vast collection of content in multiple genres.
                Enjoy watching your favorite movie for free with no sign-up required and no ads.

            </p>

            <p className="creator h-auto w-1/2 text-center text-[0.7rem] cursor-pointer hover:underline" onClick={() => window.open("https://hitarthpathak.github.io/", "_blank")}>

                © Hitarth Pathak

            </p>

        </div>

    );

};

export default Footer;