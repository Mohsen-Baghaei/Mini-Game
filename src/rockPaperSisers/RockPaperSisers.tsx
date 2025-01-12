import { ReactElement, useEffect, useState } from "react";
import { FaRegHandRock, FaRegHandScissors } from "react-icons/fa";
import { LiaHandPaper } from "react-icons/lia";

const RockPaperSisers = (): ReactElement => {
  const computerOptions: string[] = ["rock", "paper", "scissors"];
  const [selectComputer, setSelectComputer] = useState({
    icon: <FaRegHandRock />,
    className: "",
  });
  const [selectUser, setSelectUser] = useState({
    icon: <FaRegHandRock />,
    className: "",
  });
  const [winning, setWinng] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(0);

  const startGame = (userSelect: string) => {
    const computerSelect: string =
      computerOptions[Math.floor(Math.random() * 3)];
    switch (userSelect) {
      case "rock":
        setSelectUser({
          icon: <FaRegHandRock className="size-20 md:size-40 text-stone-700" />,
          className: "bg-teal-500",
        });
        computerSelect === "rock"
          ? setWinng("Draw")
          : computerSelect === "paper"
          ? setWinng("Computer Win")
          : setWinng("Player Win");
        break;
      case "paper":
        setSelectUser({
          icon: <LiaHandPaper className="size-20 md:size-40 text-stone-700" />,
          className: "bg-sky-400",
        });
        computerSelect === "rock"
          ? setWinng("Player Win")
          : computerSelect === "paper"
          ? setWinng("Draw")
          : setWinng("Computer Win");
        break;
      case "scissors":
        setSelectUser({
          icon: (
            <FaRegHandScissors className="size-20 md:size-40 text-stone-700" />
          ),
          className: "bg-rose-400",
        });
        computerSelect === "rock"
          ? setWinng("Computer Win")
          : computerSelect === "paper"
          ? setWinng("Player Win")
          : setWinng("Draw");
        break;

      default:
        break;
    }
    computerSelect === "rock"
      ? setSelectComputer({
          icon: <FaRegHandRock className="size-20 md:size-40 text-stone-700" />,
          className: "bg-teal-500",
        })
      : computerSelect === "paper"
      ? setSelectComputer({
          icon: <LiaHandPaper className="size-20 md:size-40 text-stone-700" />,
          className: "bg-sky-400",
        })
      : setSelectComputer({
          icon: (
            <FaRegHandScissors className="size-20 md:size-40 text-stone-700" />
          ),
          className: "bg-rose-400",
        });
    setRound((prev) => prev + 1);
  };

  useEffect(() => {
    winning === "Player Win" ? setScore((prev) => prev + 1) : null;
  }, [winning]);

  const resetGame = () => {
    setWinng("");
    setRound(0);
    setScore(0);
    setSelectComputer({ icon: <FaRegHandRock />, className: "" });
    setSelectUser({ icon: <FaRegHandRock />, className: "" });
  };

  const closeHover = () => {
    setWinng("");
  };

  return (
    <section className="flex flex-col items-center text-slate-50">
      <h1 className="text-4xl md:text-6xl mb-5 text-center">
        Rock Paper Scissors
      </h1>

      <article className="flex w-full bg-slate-700 rounded-2xl my-4">
        <div className="flex flex-col w-1/3 items-center justify-center border-2 border-solid border-slate-400 rounded-s-2xl text-3xl p-1 gap-2">
          <p>Score</p>
          <p>{score}</p>
        </div>
        <div className="flex flex-col w-1/3 items-center justify-center border-2 border-solid border-slate-400 text-3xl p-1 gap-2">
          <p>Round</p>
          <p>{round}</p>
        </div>
        <div className="flex flex-col w-1/3 items-center justify-center border-2 border-solid border-slate-400 rounded-e-2xl text-3xl p-1 gap-2">
          <button
            type="button"
            className="cursor-pointer text-blue-400"
            onClick={resetGame}
          >
            Reset
          </button>
        </div>
      </article>

      <article className="w-full flex flex-col bg-slate-700 rounded-2xl border-2 border-solid border-slate-400 relative">
        <div className="w-full h-80 md:h-96 flex justify-between items-center gap-5 p-5">
          <div className="flex flex-col">
            <div
              className={`size-32 md:size-80 rounded-full flex justify-center items-center ${
                selectUser?.className
              } transition-all duration-1000 opacity-0 scale-0 ${
                winning ? "rotate-[720deg] opacity-100 scale-100" : ""
              }`}
            >
              {selectUser.icon}
            </div>
            <p className={winning ? "block" : "hidden"}>user</p>
          </div>
          <div className="flex flex-col">
            <div
              className={`size-32 md:size-80 rounded-full flex justify-center items-center ${
                selectComputer?.className
              } transition-all duration-1000 opacity-0 scale-0 ${
                winning ? "rotate-[720deg] opacity-100 scale-100" : ""
              }`}
            >
              {selectComputer.icon}
            </div>
            <p className={winning ? "block" : "hidden"}>Computer</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-3 w-full md:w-4/5 mx-auto p-5">
          <button
            className="size-20 md:size-24 rounded-full flex justify-center items-center bg-teal-500 hover:rotate-45"
            onClick={() => startGame("rock")}
          >
            <FaRegHandRock className="size-12 text-stone-700" />
          </button>
          <button
            className="size-20 md:size-24 rounded-full flex justify-center items-center bg-sky-400 hover:rotate-45"
            onClick={() => startGame("paper")}
          >
            <LiaHandPaper className="size-12 text-stone-700" />
          </button>
          <button
            className="size-20 md:size-24 rounded-full flex justify-center items-center bg-rose-400 hover:rotate-45"
            onClick={() => startGame("scissors")}
          >
            <FaRegHandScissors className="size-12 text-stone-700 rotate-90" />
          </button>
        </div>
        <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-slate-700 rounded-2xl border-2 border-solid border-slate-400 opacity-50"></div>
      </article>
    </section>
  );
};

export default RockPaperSisers;
