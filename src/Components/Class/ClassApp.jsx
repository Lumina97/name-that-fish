import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { Images } from "../../assets/Images";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
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

  render() {
    return (
      <>
        <>
          <ClassScoreBoard state={this.state} />
          {this.state.initialFishes.length > 0 && (
            <ClassGameBoard
              state={this.state}
              addFishToRightGuess={this.addFishToRightGuess}
              addFishToWrongGuess={this.addFishToWrongGuess}
              setInitialArray={this.setInitialArray}
            />
          )}
          {this.state.initialFishes.length <= 0 && (
            <ClassFinalScore state={this.state} />
          )}
        </>
      </>
    );
  }
}
