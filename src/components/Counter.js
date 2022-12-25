import React from "react";
import "../styles/Counter.css";

// main counter function
export default function Counter(props) {
    const id = props.counter.id;
    const count = props.counter.count;
    let numClass = "count-button ";
    numClass += count === 0 ? "zero" : "nonzero";
    return (
        <div className="counter">
            <h4>Counter Item #{id}</h4>
            <div className="count-container">
                <span className={numClass}>{formatCount(count)}</span>
                <button
                    onClick={() => {
                        props.onIncrement(props.counter);
                    }}
                >
                    INCREMENT
                </button>
                <button
                    className="delete-btn"
                    onClick={() => {
                        props.onDelete(props.counter);
                    }}
                >
                    DELETE
                </button>
            </div>
        </div>
    );
}

// helper function to format the count
function formatCount(count) {
    return count === 0 ? "zero" : count;
}
