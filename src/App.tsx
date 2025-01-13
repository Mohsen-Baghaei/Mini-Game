import { ReactElement, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import HomePage from "./components/HomePage";

const MagicMatch = lazy(() => import("./magicMatch/MagicMatch"));
const TicTacToe = lazy(() => import("./tictactoe/TicTacToe"));
const RockPaperSisers = lazy(() => import("./rockPaperSisers/RockPaperSisers"));

const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="magicmatch"
          element={
            <Suspense fallback={<Loading />}>
              <MagicMatch />
            </Suspense>
          }
        />

        <Route
          path="tictactoe"
          element={
            <Suspense fallback={<Loading />}>
              <TicTacToe />
            </Suspense>
          }
        />

        <Route
          path="rockpapersisers"
          element={
            <Suspense fallback={<Loading />}>
              <RockPaperSisers />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
