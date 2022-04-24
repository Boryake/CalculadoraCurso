    import React from "react";
    import Button from "./Components/Button";
    import Result from "./Components/Result"
    import "./App.css"


    const App = () => {
        console.log("render app")
        return (<main className="try-one">
            <Result />
            <div className="numbers">
                <Button text="1"/>
                <button>2</button>
                <button>2</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
            <div className="functions"><button>Clear</button>
            <button>Remove</button>
            </div>
            <div className="math-operations">
            <button>+</button>
            <button>-</button>
            <button>/</button>
            <button></button>
            <button></button>
            </div>

        </main>)
    }

    export default App