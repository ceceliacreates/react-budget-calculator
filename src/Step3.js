import React from "react";

const Step3 = function (props) {

    if (props.currentStep !== 3) {
      return null;
    }
    return (
      <div className="form">
        <h5>
          Now we'll add up your discretionary expenses. These can change from
          month to month, so go with an average or goal.
        </h5>
        <label htmlFor="food">
          How much do you spend at restaurants, fast food, coffee shops, and
          bars?
        </label>
        <input
          id="food"
          name="food"
          type="number"
          value={props.food}
          onChange={props.handleChange}
        />
        <label htmlFor="shopping">
          What about shopping? This refers to ALL shopping, including personal
          items like toiletries, gifts for others, clothes, etc.
        </label>
        <input
          id="shopping"
          name="shopping"
          type="number"
          value={props.shopping}
          onChange={props.handleChange}
        />
        <label htmlFor="entertainment">
          And finally, what do you spend on entertainment? Include movies, video
          games, subscriptions lik Spotify and Netflix, concerts, sports events,
          etc.
        </label>
        <input
          id="entertainment"
          name="entertainment"
          type="number"
          value={props.entertainment}
          onChange={props.handleChange}
        />
        <button onClick={props.handleSubmit} type="button">Check Your Budget</button>
      </div>
    );
  }


export default Step3;
