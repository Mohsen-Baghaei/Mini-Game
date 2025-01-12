import { ReactElement } from "react";
import { lazy, Suspense } from "react";
import MagicMatch from "./magicMatch/MagicMatch";
import TicTacToe from "./tictactoe/TicTacToe";
import RockPaperSisers from "./rockPaperSisers/RockPaperSisers";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Loading />} />
      </Route>
    </Routes>
  );
};

export default App;
