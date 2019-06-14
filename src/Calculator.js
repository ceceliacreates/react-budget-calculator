import React from "react";
import Basics from "./Step1";
import Essential from "./Step2";
import Discretionary from "./Step3";
import Results from "./Results";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      name: "",
      income: "",
      rate: "",
      housing: "",
      utilities: "",
      groceries: "",
      insurance: "",
      debt: "",
      care: "",
      food: "",
      shopping: "",
      entertainment: ""
    };
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    if (name === "name") {
      this.setState({ [name]: value });
    } else {
      this.setState({
        [name]: parseFloat(value)
      });
    }
  }

  handleSubmit() {
    this.setState({ currentStep: 4 });
  }

  startOver() {
    this.setState({ currentStep: 1 });
  }

  calculateResults() {
    const {
      income,
      rate,
      housing,
      utilities,
      groceries,
      insurance,
      debt,
      care,
      food,
      shopping,
      entertainment
    } = this.state;

    const essential = housing + utilities + groceries + insurance + debt + care;
    const discretionary = food + shopping + entertainment;
    const spending = essential + discretionary;
    const desiredSavings = income * rate;
    const afterSpending = income - spending;
    const afterSavings = income - spending - desiredSavings;

    const results = {
      essential: essential,
      discretionary: discretionary,
      spending: spending,
      desiredSavings: desiredSavings,
      afterSpending: afterSpending,
      afterSavings: afterSavings
    };

    return results;
  }

  get previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 1 && currentStep < 3) {
      return (
        <button id="back" onClick={this._prev}>
          Back
        </button>
      );
    }
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button id="next" onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        <h1>Budget Calculator</h1>
        <p>Step {this.state.currentStep}</p>
        <Basics
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          name={this.state.name}
          income={this.state.income}
          rate={this.state.rate}
        />

        <Essential
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          housing={this.state.housing}
          utilities={this.state.utilities}
          groceries={this.state.groceries}
          insurance={this.state.insurance}
          debt={this.state.debt}
          care={this.state.care}
        />

        <Discretionary
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          food={this.state.food}
          shopping={this.state.shopping}
          entertainment={this.state.entertainment}
        />

        <Results
          state={this.state}
          calculateResults={this.calculateResults}
          startOver={this.startOver}
        />

        <div className="buttons">
          {this.previousButton}
          {this.nextButton}
        </div>
      </>
    );
  }
}

export default Calculator;
