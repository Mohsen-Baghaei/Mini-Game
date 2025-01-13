import { ReactElement } from "react";
import cardGame from "../assets/img/icons/cardGame.png";
import tictactoe from "../assets/img/icons/tictactoe.png";
import rockpaperscissors from "../assets/img/icons/rockpaperscissors.png";
import { Link } from "react-router-dom";

const HomePage = (): ReactElement => {
  return (
    <section className="flex home-min-height flex-row justify-center items-center relative">
      <header className="absolute top-0 w-full bg-gradient-to-r from-red-400 from-10% via-sky-500 via-30% to-rose-500 to-90% rounded-md mb-5">
        <h1 className="text-6xl">Mini Game</h1>
      </header>
      <article className="flex flex-col md:flex-row justify-center items-start md:items-center gap-2 md:gap-4 w-full">
        <Link to="/tictactoe" className="cursor-pointer w-full md:w-auto">
          <figure className="flex md:flex-col justify-start md:justify-center items-center bg-gradient-to-b from-sky-200 from-20% via-sky-300 via-60% to-sky-400 to-90% p-2 md:p-5 rounded-xl">
            <img
              src={tictactoe}
              alt={tictactoe}
              className="size-32 md:size-56 "
            />
            <figcaption className="text-2xl mt-3 ml-5 md:ml-0">
              Tic Tac Toe
            </figcaption>
          </figure>
        </Link>
        <Link to="/magicmatch" className="cursor-pointer w-full md:w-auto">
          <figure className="flex md:flex-col justify-start md:justify-center items-center bg-gradient-to-b from-sky-200 from-20% via-sky-300 via-60% to-sky-400 to-90% p-2 md:p-5 rounded-xl">
            <img
              src={cardGame}
              alt={cardGame}
              className="size-32 md:size-56 "
            />
            <figcaption className="text-2xl mt-3 ml-5 md:ml-0">
              Magic Match
            </figcaption>
          </figure>
        </Link>
        <Link to="/rockpapersisers" className="cursor-pointer w-full md:w-auto">
          <figure className="flex md:flex-col justify-start md:justify-center items-center bg-gradient-to-b from-sky-200 from-20% via-sky-300 via-60% to-sky-400 to-90% p-2 md:p-5 rounded-xl">
            <img
              src={rockpaperscissors}
              alt={rockpaperscissors}
              className="size-32 md:size-56 "
            />
            <figcaption className="text-2xl mt-3 ml-5 md:ml-0">
              Rock Paper Scissors
            </figcaption>
          </figure>
        </Link>
      </article>
      <footer className="absolute bottom-0 w-full bg-gradient-to-r from-red-400 from-10% via-sky-500 via-30% to-rose-500 to-90% rounded-md">
        <p className="flex flex-col md:flex-row justify-center items-center">
          <span>&copy; All Rights Reserved by: </span>
          <span> Mohsen Baghaei</span>
        </p>
      </footer>
    </section>
  );
};

export default HomePage;
