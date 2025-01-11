import { ReactElement, useEffect, useState } from "react";

import helmet from "../assets/img/magicmatch/helmet.png";
import halloween from "../assets/img/magicmatch/halloween.png";
import ring from "../assets/img/magicmatch/ring.png";
import parchment from "../assets/img/magicmatch/parchment.png";
import shield from "../assets/img/magicmatch/shield.png";
import sword from "../assets/img/magicmatch/sword.png";
import SingleCard from "./SingleCard";

export type CardType = {
  id?: number;
  src: string;
  matched: boolean;
};

const cardImages: CardType[] = [
  { src: helmet, matched: false },
  { src: halloween, matched: false },
  { src: ring, matched: false },
  { src: parchment, matched: false },
  { src: shield, matched: false },
  { src: sword, matched: false },
];

const MagicMatch = (): ReactElement => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [turns, setTurns] = useState<number>(0);

  const [choiceOne, setChoiceOne] = useState<CardType | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardType | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const shuffleCards = (): void => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.floor(Math.random() * 12))
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: CardType) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src && choiceOne.id !== choiceTwo.id) {
        setCards((prevCard) => {
          return prevCard.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      }
      setTimeout(() => {
        reset();
      }, 1000);
    }
  }, [choiceOne, choiceTwo]);

  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const content = cards.map((card) => {
    const flipped = card === choiceOne || card === choiceTwo || card.matched;
    return (
      <SingleCard
        key={card.id}
        card={card}
        handleChoice={handleChoice}
        flipped={flipped}
        disabled={disabled}
      />
    );
  });

  return (
    <>
      <h1 className="text-6xl mb-5">Magic Match</h1>
      <button
        onClick={shuffleCards}
        className="bg-none border-2 border-solid border-slate-50 py-1 px-3 rounded-md text-slate-50 font-bold cursor-pointer text-2xl mt-2 hover:bg-teal-600 "
      >
        New Game
      </button>
      <div className="mt-10 flex flex-wrap justify-center items-center gap-5">
        {content}
      </div>
      <p className="mt-5">Turns: {turns}</p>
    </>
  );
};

export default MagicMatch;
