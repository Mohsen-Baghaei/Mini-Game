import { ReactElement } from "react";
import MagicMatch from "./magicMatch/MagicMatch";

const App = (): ReactElement => {
  return (
    <main className="max-w-4xl my-10 mx-auto p-5">
      <MagicMatch />
    </main>
  );
};

export default App;
