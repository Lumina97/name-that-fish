import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";

const initialFishes = [
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
];

export function FunctionalApp() {
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const currentFishIndex = correctGuesses + incorrectGuesses;

  const showGameBoard = () => {
    if (currentFishIndex <= initialFishes.length - 1) {
      return (
        <>
          <FunctionalScoreBoard
            correctGuesses={correctGuesses}
            incorrectGuesses={incorrectGuesses}
            remainingFishNames={initialFishes
              .slice(currentFishIndex)
              .map((fish) => fish.name)}
          />
          <FunctionalGameBoard
            correctGuesses={correctGuesses}
            incorrectGuesses={incorrectGuesses}
            setCorrectGuesses={setCorrectGuesses}
            setIncorrectGuesses={setIncorrectGuesses}
            currentFish={initialFishes[currentFishIndex]}
          />
        </>
      );
    } else
      return (
        <FunctionalFinalScore
          correctGuesses={correctGuesses}
          totalFishes={initialFishes.length}
        />
      );
  };

  return <>{showGameBoard()}</>;
}
