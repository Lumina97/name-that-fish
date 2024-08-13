import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { Images } from "../../assets/Images";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  initialFishes = [
    {
      name: "trout",
      url: Images.trout,
    },
    {
      name: "salmon",
      url: Images.salmon,
    },
    {
      name: "tuna",
      url: Images.tuna,
    },
    {
      name: "shark",
      url: Images.shark,
    },
  ];

  state = {
    correctGuesses: 0,
    incorrectGuesses: 0,
  };

  currentFishIndex = this.state.correctGuesses + this.state.incorrectGuesses;

  addFishToWrongGuess = () => {
    this.setState({
      incorrectGuesses: this.state.incorrectGuesses + 1,
    });
  };

  addFishToRightGuess = () => {
    this.setState({
      correctGuesses: this.state.correctGuesses + 1,
    });
  };

  displayGameBoard() {
    this.currentFishIndex =
      this.state.correctGuesses + this.state.incorrectGuesses;

    if (this.currentFishIndex <= this.initialFishes.length - 1) {
      return (
        <>
          <ClassScoreBoard
            correctGuesses={this.state.correctGuesses}
            incorrectGuesses={this.state.incorrectGuesses}
            remainingFishNames={this.initialFishes
              .slice(this.currentFishIndex)
              .map((fish) => fish.name)}
          />
          <ClassGameBoard
            currentFishIndex={this.currentFishIndex}
            currentFish={this.initialFishes[this.currentFishIndex]}
            addFishToRightGuess={this.addFishToRightGuess}
            addFishToWrongGuess={this.addFishToWrongGuess}
          />
        </>
      );
    } else
      return (
        <ClassFinalScore
          correctGuesses={this.state.correctGuesses}
          totalFishes={this.initialFishes.length}
        />
      );
  }

  render() {
    return <>{this.displayGameBoard()}</>;
  }
}
