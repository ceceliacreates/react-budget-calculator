import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div className="form">
        <label for="name">What is your name?</label>
        <input
          id="name"
          type="text"
          value={this.props.name}
          onChange={this.props.handleChange}
        />
        <label for="income">
          What is your monthly take-home (after tax) income?
        </label>
        <input
          id="income"
          type="number"
          value={this.props.income}
          onChange={this.props.handleChange}
        />
        <label for="rate">
          How much of your income would you like to save? Enter as a decimal.
          For example, enter .20 for 20%.
        </label>
        <input
          id="rate"
          type="number"
          value={this.props.rate}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div className="form">
        <h5>
          Let's take a look at your essential expenses. These are all on a
          monthly basis.
        </h5>
        <label for="housing">
          What is your total housing payment? If you own, include any taxes,
          PMI, or condo fees.
        </label>
        <input
          id="housing"
          type="number"
          value={this.props.housing}
          onChange={this.props.handleChange}
        />
        <label for="utilities">
          How much do you spend on utilities? Include internet and cell phone if
          you consider these essential expenses -- I know I do!
        </label>
        <input
          id="utilities"
          type="number"
          value={this.props.utilities}
          onChange={this.props.handleChange}
        />
        <label for="groceries">How much do you spend on groceries?</label>
        <input
          id="groceries"
          type="number"
          value={this.props.groceries}
          onChange={this.props.handleChange}
        />
        <label for="insurance">
          How much do you spend on renter/homeowner, auto, health, life, and
          other insurances? Do not include any that are already deducted from
          your paycheck.
        </label>
        <input
          id="insurance"
          type="number"
          value={this.props.insurance}
          onChange={this.props.handleChange}
        />
        <label for="debt">
          What is your total minimum debt payment each month? Include any car
          payments, student loans, personal loans, and minimum credit card
          payments.
        </label>
        <input
          id="debt"
          type="number"
          value={this.props.debt}
          onChange={this.props.handleChange}
        />
        <label for="care">
          How much do you spend on child, pet, or other care?
        </label>
        <input
          id="care"
          type="number"
          value={this.props.care}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <div className="form">
        <h5>
          Now we'll add up your discretionary expenses. These can change from
          month to month, so go with an average or goal. This is your 'fun
          money'!
        </h5>
        <label for="food">
          How much do you spend at restaurants, fast food, coffee shops, and
          bars?
        </label>
        <input
          id="food"
          type="number"
          value={this.props.food}
          onChange={this.props.handleChange}
        />
        <label for="shopping">
          What about shopping? This refers to ALL shopping, including personal
          items like toiletries, gifts for others, clothes, etc.
        </label>
        <input
          id="shopping"
          type="number"
          value={this.props.shopping}
          onChange={this.props.handleChange}
        />
        <label for="entertainment">
          And finally, what do you spend on entertainment? Include movies, video
          games, subscriptions lik Spotify and Netflix, concerts, sports events,
          etc.
        </label>
        <input
          id="entertainment"
          type="number"
          value={this.props.entertainment}
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.handleSubmit}>Check Your Budget</button>
      </div>
    );
  }
}

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault;
    const {
      name,
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
    alert(
      `Okay, ${name}, with an income of ${income} and a savings rate of ${rate}, you are spending ${housing} on housing, ${utilities} on utilities, ${groceries} on groceries, ${insurance} on insurance, ${debt} on debt, ${care} on care, ${food} on food, ${shopping} on shopping, and ${entertainment} on entertainment.`
    );
  }
  render() {
    <React.Fragment>
      <h1>Budget Calculator</h1>
      <p>Step {this.state.currentStep}</p>

      <Step1
        currentStep={this.state.currentStep}
        handleChange={this.handleChange}
        name={this.state.name}
        income={this.state.income}
        rate={this.state.rate}
      />

      <Step2
        currentStep={this.state.currentStep}
        handleChange={this.handleChange}
        housing={this.state.housing}
        utilities={this.state.utilities}
        groceries={this.state.groceries}
        insurance={this.state.insurance}
        debt={this.state.debt}
        care={this.state.care}
      />

      <Step3
        currentStep={this.state.currentStep}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        food={this.state.food}
        shopping={this.state.shopping}
        entertainment={this.state.entertainment}
      />
    </React.Fragment>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
