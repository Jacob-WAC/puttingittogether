import React from "react";
import Person from "./components/newcomponent";

function App() {
    return (
        <div className="App">
            <h1>Doe,Jane</h1>
            <p>brown hair</p>
            <Person></Person>
            <h1>doe john</h1>
            <p>black hair</p>
            <Person></Person>
        </div>
    );
}

export default App;
