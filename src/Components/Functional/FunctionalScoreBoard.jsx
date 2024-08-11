import "./styles/score-board.css";

export function FunctionalScoreBoard({ state }) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {state.wrongGuess.length}</div>
      <div id="choices-left">
        {state.initialFishes.map((fish) => (
          <div key={fish.name} className="choice">
            {fish.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {state.correctGuess.length}</div>
    </div>
  );
}
