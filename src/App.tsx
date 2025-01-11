import { ReactElement } from "react";
import MagicMatch from "./magicMatch/MagicMatch";
import TicTacToe from "./tictactoe/TicTacToe";

const App = (): ReactElement => {
  return (
    <main className="max-w-4xl my-2 mx-auto p-5">
      <TicTacToe />
    </main>
  );
};

export default App;
