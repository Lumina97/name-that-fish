import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    const { correctGuesses, incorrectGuesses, remainingFishNames } = this.props;
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
}
