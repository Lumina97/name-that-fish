import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    currentGuessText: "",
  };

  checkGuessedValue = () => {
    const { addFishToRightGuess, addFishToWrongGuess, currentFish } =
      this.props;

    this.state.currentGuessText === currentFish.name
      ? addFishToRightGuess()
      : addFishToWrongGuess();
  };

  render() {
    const { currentFish } = this.props;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.checkGuessedValue();
            this.setState({ currentGuessText: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            value={this.state.currentGuessText}
            type="text"
            name="fish-guess"
            onChange={(e) => {
              this.setState({ currentGuessText: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
