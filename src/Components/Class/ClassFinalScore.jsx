import { Component } from "react";

export class ClassFinalScore extends Component {
  render() {
    const { correctGuesses, totalFishes } = this.props;

    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctGuesses}</p>
          <hr />
          <p>{totalFishes}</p>
        </div>
      </div>
    );
  }
}
