import React from "react";

const Step1 = function (props) {
    if (props.currentStep !== 1) {
      return null;
    }
    return (
      <>
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
        <label style={{display: "block"}}>
          How much of your income would you like to save? 
        </label>
        <label>
        <input
          value={0}
          type="radio"
          name="rate"
          onChange={props.handleChange}
          style={{display: "inline", margin: "5px"}}
        />
        0%
        </label>
        <label>
        <input
          value={.1}
          type="radio"
          name="rate"
          onChange={props.handleChange}
          style={{display: "inline", margin: "5px"}}
        />
        10%
        </label>
        <label>
        <input
          value={.2}
          type="radio"
          name="rate"
          onChange={props.handleChange}
          style={{display: "inline", margin: "5px"}}
        />
        20%
        </label>
        <label>
        <input
          value={.25}
          type="radio"
          name="rate"
          onChange={props.handleChange}
          style={{display: "inline", margin: "5px"}}
        />
        25%
        </label>
        </>
    );
  }

export default Step1;
