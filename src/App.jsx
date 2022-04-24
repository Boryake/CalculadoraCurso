    import React from "react";
    import Button from "./Components/Button";
    import Result from "./Components/Result"
    import "./App.css"


    const App = () => {
        const clickHandlerFunction = (text)=>{console.log(text)}
        console.log("render app")
        return (<main className="try-one">
            <Result />
            <div className="numbers">
                <Button text="1" clickHandler={clickHandlerFunction}/>
                <Button text="2" clickHandler={clickHandlerFunction}/>
                <Button text="3" clickHandler={clickHandlerFunction}/>
                <Button text="4" clickHandler={clickHandlerFunction}/>
                <Button text="5" clickHandler={clickHandlerFunction}/>
                <Button text="6" clickHandler={clickHandlerFunction}/>
                <Button text="7" clickHandler={clickHandlerFunction}/>
                <Button text="8" clickHandler={clickHandlerFunction}/>
                <Button text="9" clickHandler={clickHandlerFunction}/>
                <Button text="0" clickHandler={clickHandlerFunction}/>  
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