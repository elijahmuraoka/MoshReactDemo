import React from "react";
import Counter from "./Counter";
import "../styles/Counters.css";

export default function Counters(props) {
    const { onAdd, onReset, onDelete, onIncrement, counters } = props;
    return (
        <div id="counters">
            <button onClick={onAdd}>Add Counter</button>
            <button onClick={onReset}>Reset</button>
            <div id="counters-grid">
                {counters.map((counter) => {
                    return (
                        <Counter
                            key={counter.id}
                            counter={counter}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                        />
                    );
                })}
            </div>
        </div>
    );
}
