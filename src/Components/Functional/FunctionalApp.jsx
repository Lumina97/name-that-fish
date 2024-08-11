import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";

export function FunctionalApp() {
  const [state, setState] = useState({
    correctGuess: [],
    wrongGuess: [],
    initialFishes: [
      {
        name: "trout",
        url: Images.trout,
      },
      {
        name: "salmon",
        url: Images.salmon,
      },
      {
        name: "tuna",
        url: Images.tuna,
      },
      {
        name: "shark",
        url: Images.shark,
      },
    ],
    gameFinished: false,
  });

  return (
    <>
      <FunctionalScoreBoard state={state} />
      {!state.gameFinished && (
        <FunctionalGameBoard state={state} setState={setState} />
      )}
      {state.gameFinished && <FunctionalFinalScore state={state} />}
    </>
  );
}
