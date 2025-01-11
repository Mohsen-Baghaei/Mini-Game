import { ReactElement } from "react";

import Strike from "./Strike";
import Tile from "./Tile";

type PropsType = {
  tiles: string[];
  handleTileClick: (index: number) => void;
  playerTurn: string;
  strikeClass: string;
  endGame: boolean;
};

const Board = ({
  tiles,
  handleTileClick,
  playerTurn,
  strikeClass,
  endGame,
}: PropsType): ReactElement => {
  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-1 relative">
      {tiles.map((tile, i) => {
        return (
          <Tile
            key={i}
            handleTileClick={handleTileClick}
            index={i}
            tile={tile}
            playerTurn={playerTurn}
            endGame={endGame}
          />
        );
      })}
      <Strike strikeClass={strikeClass} />
    </section>
  );
};

export default Board;
