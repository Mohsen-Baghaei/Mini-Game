import { ReactElement, useState } from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_O = "O";

const TicTacToe = (): ReactElement => {
  const [tiles, setTiles] = useState<string[]>(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

  const handleTileClick = (index: number) => {
    if (tiles[index] !== "") {
      return;
    }
    const newTile = [...tiles];
    newTile[index] = playerTurn;
    setTiles(newTile);
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  return (
    <section className="flex flex-col items-center text-slate-50">
      <h1 className=" text-6xl mb-5 text-center">Tic Tac Toe</h1>
      <Board
        tiles={tiles}
        handleTileClick={handleTileClick}
        playerTurn={playerTurn}
      />
    </section>
  );
};

export default TicTacToe;
