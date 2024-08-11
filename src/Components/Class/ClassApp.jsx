import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { Images } from "../../assets/Images";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    isGameFinished: false,
    correctGuess: [],
    wrongGuess: [],
    initialFishes: [
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
    ],
  };

  addFishToWrongGuess = () => {
    this.setState((prevState) => ({
      ...prevState,
      wrongGuess: [...prevState.wrongGuess, this.state.initialFishes[0]],
    }));
  };

  addFishToRightGuess = () => {
    this.setState((prevState) => ({
      ...prevState,
      correctGuess: [...prevState.correctGuess, this.state.initialFishes[0]],
    }));
  };

  setInitialArray = (array) => {
    this.setState((prevState) => ({
      ...prevState,
      initialFishes: array,
    }));
  };

  setIsGameFinished = (booleanValue) => {
    this.setState({ isGameFinished: booleanValue });
  };

  render() {
    return (
      <>
        <>
          <ClassScoreBoard fishGuesses={this.state} />
          {!this.state.isGameFinished && (
            <ClassGameBoard
              fishGuesses={this.state}
              addFishToRightGuess={this.addFishToRightGuess}
              addFishToWrongGuess={this.addFishToWrongGuess}
              setInitialArray={this.setInitialArray}
              setIsGameFinished={this.setIsGameFinished}
            />
          )}
          {this.state.isGameFinished && (
            <ClassFinalScore fishGuesses={this.state} />
          )}
        </>
      </>
    );
  }
}
