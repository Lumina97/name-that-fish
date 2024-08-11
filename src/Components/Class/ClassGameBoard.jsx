import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    currentGuessText: "",
  };

  checkGuessedValue = () => {
    const { addFishToRightGuess, addFishToWrongGuess, setInitialArray } =
      this.props;

    const { initialFishes } = this.props.state;

    this.state.currentGuessText === initialFishes[0].name
      ? addFishToRightGuess()
      : addFishToWrongGuess();

    const tempArray = initialFishes.slice(1);
    setInitialArray(tempArray);
  };

  render() {
    const nextFishToName = this.props.state.initialFishes[0];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
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
