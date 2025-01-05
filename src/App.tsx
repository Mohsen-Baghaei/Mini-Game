import { ReactElement, useState } from "react";

type CardType = {
  id?: number;
  src: string;
};

const cardImages: CardType[] = [
  { src: "./assets/img/helmet-1.png" },
  { src: "./assets/img/potion-1.png" },
  { src: "./assets/img/ring-1.png" },
  { src: "./assets/img/scroll-1.png" },
  { src: "./assets/img/shield-1.png" },
  { src: "./assets/img/sword-1.png" },
];

const App = (): ReactElement => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [turns, setTurns] = useState<number>(0);

  const shuffleCards = (): void => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.floor(Math.random() * 12))
      .map((card) => ({ ...card, id: Math.floor(Math.random() * 12) }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards);

  return (
    <main className="max-w-4xl my-10 mx-auto">
      <h1 className="text-3xl">Magic Match</h1>
      <button
        onClick={shuffleCards}
        className="bg-none border-2 border-solid border-slate-50 py-1 px-3 rounded-md text-slate-50 font-bold cursor-pointer text-lg mt-2 hover:bg-rose-600 "
      >
        New Game
      </button>
    </main>
  );
};

export default App;
