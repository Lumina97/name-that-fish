import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    const { correctGuess, wrongGuess, initialFishes } = this.props.fishGuesses;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {wrongGuess.length}</div>
        <div id="choices-left">
          {initialFishes.map((fish) => (
            <div key={fish.name} className="choice">
              {fish.name}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctGuess.length}</div>
      </div>
    );
  }
}
