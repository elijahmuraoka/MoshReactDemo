import Counters from "./components/Counters.js";
import Navbar from "./components/Navbar.js";
import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
    const [counterItems, setCounterItems] = useState([]);
    const [idCount, setIdCount] = useState(1);

    const handleIncrement = (counter) => {
        console.log("incrementing this counter: ", counter);
        const index = counterItems.indexOf(counter);
        const newCounterItems = [...counterItems];
        newCounterItems[index].count++;
        setCounterItems(newCounterItems);
    };

    const handleDelete = (counter) => {
        console.log("deleting this counter: ", counter);
        const index = counterItems.indexOf(counter);
        const newCounterItems = [...counterItems];
        newCounterItems.splice(index, 1);
        setCounterItems(newCounterItems);
    };

    const handleReset = () => {
        const newCounterItems = [...counterItems];
        newCounterItems.forEach((item) => {
            item.count = 0;
        });
        setCounterItems(newCounterItems);
    };

    const addCounter = () => {
        setIdCount(idCount + 1);
        console.log(idCount);
        setCounterItems((prevCounters) =>
            prevCounters.concat({
                id: idCount,
                count: 0,
            })
        );
    };

    return (
        <React.Fragment>
            <Navbar 
            counters={counterItems} />
            <main>
                <Counters
                    onReset={handleReset}
                    onIncrement={handleIncrement}
                    onDelete={handleDelete}
                    onAdd={addCounter}
                    counters={counterItems}
                />
            </main>
        </React.Fragment>
    );
}
