import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({
  correctGuesses,
  incorrectGuesses,
  setCorrectGuesses,
  setIncorrectGuesses,
  currentFish,
}) {
  const [currentGuessText, setGuessText] = useState("");

  const checkGuessedValue = () => {
    currentGuessText === currentFish.name
      ? setCorrectGuesses(correctGuesses + 1)
      : setIncorrectGuesses(incorrectGuesses + 1);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          checkGuessedValue();
          setGuessText("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          value={currentGuessText}
          type="text"
          name="fish-guess"
          onChange={(e) => {
            setGuessText(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
