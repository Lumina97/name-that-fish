import "./styles/final-score.css";

export const FunctionalFinalScore = ({ state }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{state.correctGuess.length}</p>
      <hr />
      <p>{state.wrongGuess.length}</p>
    </div>
  </div>
);
