import { ReactElement } from "react";
import cauldron from "../assets/img/cauldron.png";
import { CardType } from "./MagicMatch";

type PropType = {
  card: CardType;
  handleChoice: (card: CardType) => void;
  flipped: boolean;
  disabled: boolean;
};

const SingleCard = ({
  card,
  handleChoice,
  flipped,
  disabled,
}: PropType): ReactElement => {
  return (
    <div className="w-1/5 cursor-pointer" key={card.id}>
      <div className="relative">
        <img
          src={card.src}
          alt="card front"
          onClick={() => (!disabled ? handleChoice(card) : "")}
          className=" w-full p-2 block border-2 border-solid border-slate-50 rounded-md bg-slate-900"
        />
        <img
          src={cauldron}
          alt="cauldron"
          onClick={() => (!disabled ? handleChoice(card) : "")}
          className={`absolute top-0 left-0 right-0 bottom-0 w-full block border-2 border-solid border-slate-50 rounded-md transition-all duration-500 bg-slate-800 ${
            flipped ? "scale-0" : "scale-1"
          }`}
        />
      </div>
    </div>
  );
};

export default SingleCard;
