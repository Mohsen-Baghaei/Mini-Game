import { ReactElement } from "react";

type Proptype = {
  strikeClass: string;
};

const Strike = ({ strikeClass }: Proptype): ReactElement => {
  return (
    <div className={`absolute bg-red-600 rounded-full ${strikeClass}`}></div>
  );
};

export default Strike;
