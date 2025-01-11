import { ReactElement, useEffect, useState } from "react";
import Board from "./Board";
import gameOver from "../assets/sounds/game_over.wav";
import click from "../assets/sounds/click.wav";

const gameOverSound = new Audio(gameOver);
gameOverSound.volume = 0.2;

const clickSound = new Audio(click);
clickSound.volume = 0.5;

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  // Rows
  { combo: [0, 1, 2], strikeClass: "w-full h-1 top-[16%]" },
  { combo: [3, 4, 5], strikeClass: "w-full h-1 top-[49%]" },
  { combo: [6, 7, 8], strikeClass: "w-full h-1 top-[83%]" },

  // Columns
  { combo: [0, 3, 6], strikeClass: "w-1 h-full left-[16%]" },
  { combo: [1, 4, 7], strikeClass: "w-1 h-full left-[49.5%]" },
  { combo: [2, 5, 8], strikeClass: "w-1 h-full left-[83%]" },

  // Diagnals
  {
    combo: [0, 4, 8],
    strikeClass: "w-[90%] h-2 top-[50%] left-[6%] skew-y-[45deg]",
  },
  {
    combo: [2, 4, 6],
    strikeClass: "w-[90%] h-2 top-[50%] left-[6%] -skew-y-[45deg]",
  },
];

const checkWinner = (
  tiles: string[],
  setStrikeClass: React.Dispatch<React.SetStateAction<string>>,
  setGameState: React.Dispatch<React.SetStateAction<string>>,
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>
) => {
  winningCombinations.map((combination) => {
    const { combo, strikeClass } = combination;
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== "" &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);
      tileValue1 === PLAYER_X
        ? setGameState("Player X Wins")
        : setGameState("Player O Wins");
      gameOverSound.play();
      setEndGame(true);
    }
  });
};

const TicTacToe = (): ReactElement => {
  const [tiles, setTiles] = useState<string[]>(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState<string>(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [gameState, setGameState] = useState<string>("");
  const [endGame, setEndGame] = useState<boolean>(false);

  useEffect(() => {
    if (count > 4) {
      checkWinner(tiles, setStrikeClass, setGameState, setEndGame);
    } else if (count === 9 && gameState === "") {
      setGameState("Draw");
      gameOverSound.play();
    }
  }, [tiles]);

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
    setCount((prev) => prev + 1);
    clickSound.play();
  };

  const newGame = () => {
    setTiles(Array(9).fill(""));
    setPlayerTurn(PLAYER_X);
    setStrikeClass("");
    setCount(0);
    setGameState("");
    setEndGame(false);
  };

  return (
    <section className="flex flex-col items-center text-slate-50">
      <h1 className=" text-6xl mb-5 text-center">Tic Tac Toe</h1>
      <button
        onClick={newGame}
        className="bg-none border-2 border-solid border-slate-50 py-1 px-3 rounded-md text-slate-50 font-bold cursor-pointer text-2xl mb-5 hover:bg-teal-600 "
      >
        New Game
      </button>
      <Board
        tiles={tiles}
        handleTileClick={handleTileClick}
        playerTurn={playerTurn}
        strikeClass={strikeClass}
        endGame={endGame}
      />
      <div
        className={`${
          gameState ? "" : "hidden"
        } text-center border-8 border-blue-600 border-dotted p-2 bg- text-slate-50 text-4xl md:text-5xl w-4/5 md:w-3/5 mt-5`}
      >
        {gameState}
      </div>
    </section>
  );
};

export default TicTacToe;
