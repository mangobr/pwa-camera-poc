import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <button className="btn-teste">Acessar</button>
            <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                capture="environment"
            />
        </div>
    );
}

export default App;
