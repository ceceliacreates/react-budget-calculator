import React from "react";

const Step1 = function (props) {
    if (props.currentStep !== 1) {
      return null;
    }
    return (
      <div className="form">
        <h5>Let's start with the basics.</h5>
        <label htmlFor="name">What is your name?</label>
        <input
          id="name"
          name="name"
          type="text"
          value={props.name}
          onChange={props.handleChange}
          autoFocus
        />
        <label htmlFor="income">
          What is your monthly take-home (after tax) income?
        </label>
        <input
          id="income"
          name="income"
          type="number"
          value={props.income}
          onChange={props.handleChange}
        />
        <label htmlFor="rate">
          How much of your income would you like to save? Enter as a decimal.
          For example, enter .20 for 20%.
        </label>
        <input
          id="rate"
          type="number"
          name="rate"
          onChange={props.handleChange}
        />
      </div>
    );
  }

export default Step1;
