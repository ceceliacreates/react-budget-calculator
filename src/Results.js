import React from "react";

const Results = function (props) {
    if (props.state.currentStep !== 4) {
        return null
    }
    const results = props.calculateResults();
    return (
        <div>
            <h2>Results</h2>
            <p>Essential Expenses: {results.essential}</p>
            <p>Discretionary Expenses: {results.discretionary}</p>
            <p>Total Spending: {results.spending}</p>
            <p>Desired Savings Amount: {results.desiredSavings} </p>
            <p>Amount Left After Spending: <span style={results.afterSpending > 0 ? {color: "green"}: {color: "red"}}>{results.afterSpending}</span></p>
            <p>Amount Left After Savings: <span style={results.afterSavings > 0 ? {color: "green"}: {color: "red"}}> {results.afterSavings} </span></p>
            <button type="button" onClick={props.startOver}>Start Over</button>
        </div>
    )
}

export default Results;