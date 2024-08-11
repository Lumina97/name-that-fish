import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard({ state, setState }) {
  const [currentGuessText, setGuessText] = useState("");

  const checkGuessedValue = () => {
    //is there a way to extract the 'setFishGuesses" out and make a function that only passes in
    //what array you want to add to?
    currentGuessText === state.initialFishes[0].name
      ? setState((prevState) => ({
          ...prevState,
          correctGuess: [...prevState.correctGuess, state.initialFishes[0]],
        }))
      : setState((prevState) => ({
          ...prevState,
          wrongGuess: [...prevState.wrongGuess, state.initialFishes[0]],
        }));

    const tempArray = state.initialFishes.slice(1);
    setState((prevState) => ({
      ...prevState,
      initialFishes: tempArray,
    }));
    //need to check temp array bc the state setter takes too long?
    //not really sure why I cannot check the value right away after setting state
    //Also some videos on debugging this stuff would be really helpful!
    if (tempArray.length === 0)
      setState((prevState) => ({
        ...prevState,
        gameFinished: true,
      }));
  };

  const nextFishToName = state.initialFishes[0];
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
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
