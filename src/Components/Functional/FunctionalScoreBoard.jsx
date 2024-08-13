import "./styles/score-board.css";

export function FunctionalScoreBoard({
  correctGuesses,
  incorrectGuesses,
  remainingFishNames,
}) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectGuesses}</div>
      <div id="choices-left">
        {remainingFishNames.map((fish) => (
          <div key={fish} className="choice">
            {fish}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctGuesses}</div>
    </div>
  );
}
