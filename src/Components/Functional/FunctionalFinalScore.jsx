import "./styles/final-score.css";

export const FunctionalFinalScore = ({ correctGuesses, totalFishes }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctGuesses}</p>
      <hr />
      <p>{totalFishes}</p>
    </div>
  </div>
);
