import { Component } from "react";

export class ClassFinalScore extends Component {
  render() {
    const { correctGuess, wrongGuess } = this.props.state;

    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctGuess.length}</p>
          <hr />
          <p>{wrongGuess.length}</p>
        </div>
      </div>
    );
  }
}
