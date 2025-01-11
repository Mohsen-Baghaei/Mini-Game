import { ReactElement } from "react";
import circle from "../assets/img/tictactoe/circle.png";
import cross from "../assets/img/tictactoe/cross.png";

type PropsType = {
  tiles: string[];
  handleTileClick: (index: number) => void;
  playerTurn: string;
};

const Board = ({
  tiles,
  handleTileClick,
  playerTurn,
}: PropsType): ReactElement => {
  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-1">
      {tiles.map((tile, i) => {
        return (
          <article
            className="cursor-pointer"
            key={i}
            onClick={() => handleTileClick(i)}
          >
            <div
              className={`text-2xl flex justify-center items-center size-24 md:size-40 bg-slate-50 rounded-lg text-black `}
            >
              {tile === "X" ? (
                <img src={cross} title={cross} />
              ) : tile === "O" ? (
                <img src={circle} title={circle} />
              ) : (
                <>
                  {playerTurn === "X" ? (
                    <img
                      src={cross}
                      title={cross}
                      className="opacity-0 hover:opacity-50"
                    />
                  ) : (
                    <img
                      src={circle}
                      title={circle}
                      className="opacity-0 hover:opacity-50"
                    />
                  )}
                </>
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Board;
