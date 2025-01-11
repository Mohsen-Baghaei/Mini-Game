import { ReactElement } from "react";
import circle from "../assets/img/tictactoe/circle.png";
import cross from "../assets/img/tictactoe/cross.png";

type PropsType = {
  handleTileClick: (index: number) => void;
  index: number;
  tile: string;
  playerTurn: string;
  endGame: boolean;
};

const Tile = ({
  handleTileClick,
  index,
  tile,
  playerTurn,
  endGame,
}: PropsType): ReactElement => {
  return (
    <button
      className="cursor-pointer"
      onClick={() => handleTileClick(index)}
      disabled={endGame}
    >
      <div
        className={`text-2xl flex justify-center items-center size-24 md:size-40 bg-slate-500 rounded-lg text-black `}
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
                className={endGame ? "hidden" : "opacity-0 hover:opacity-50"}
              />
            ) : (
              <img
                src={circle}
                title={circle}
                className={endGame ? "hidden" : "opacity-0 hover:opacity-50"}
              />
            )}
          </>
        )}
      </div>
    </button>
  );
};

export default Tile;
