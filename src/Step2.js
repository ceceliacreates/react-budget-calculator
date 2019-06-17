import React from "react";

const Step2 = function (props) {
    if (props.currentStep !== 2) {
      return null;
    }
    return (
      <>
        <h5>
          Now we'll look at your essential expenses. These are all on a monthly
          basis.
        </h5>
        <label htmlFor="housing">
          What is your total housing payment? If you own, include any taxes,
          PMI, or condo fees.
        </label>
        <input
          id="housing"
          name="housing"
          type="number"
          value={props.housing}
          onChange={props.handleChange}
          autoFocus
        />
        <label htmlFor="utilities">
          How much do you spend on utilities? Include internet and cell phone if
          you consider these essential expenses.
        </label>
        <input
          id="utilities"
          name="utilities"
          type="number"
          value={props.utilities}
          onChange={props.handleChange}
        />
        <label htmlFor="groceries">How much do you spend on groceries?</label>
        <input
          id="groceries"
          name="groceries"
          type="number"
          value={props.groceries}
          onChange={props.handleChange}
        />
        <label htmlFor="insurance">
          How much do you spend on renter/homeowner, auto, health, life, and
          other insurances? Do not include any deducted from your paycheck.
        </label>
        <input
          id="insurance"
          type="number"
          name="insurance"
          value={props.insurance}
          onChange={props.handleChange}
        />
        <label htmlFor="debt">
          What is your total minimum debt payment? Include any car payments,
          student loans, personal loans, and minimum credit card payments.
        </label>
        <input
          id="debt"
          name="debt"
          type="number"
          value={props.debt}
          onChange={props.handleChange}
        />
        <label htmlFor="care">
          How much do you spend on child, pet, or other care?
        </label>
        <input
          id="care"
          name="care"
          type="number"
          value={props.care}
          onChange={props.handleChange}
        />
        </>
    );
  }

export default Step2;
