    import React, {useState} from "react";
    import Functions from "./Components/Functions";
    import Numbers from "./Components/Numbers";
    import MathOperations  from "./Components/MathOperations";
    import Result from "./Components/Result"
    import "./App.css"





    const App = () => {
        const [stack, setStack ] = useState([]);
3 
        return (<main className="react-calculator">
            <Result value={stack} />
            <Numbers onClickNumber={number => {
            //console.log("Click en number", number)
            setStack(number)
        }}
            />
            <Functions onContentClear={ () => console.log("Content Clear")}
            onDelete={()=> console.log("On Delete")}
              />


            <MathOperations onClikOperation={
                operation => console.log("Operation", operation)}
                onClickEqual= {equal => console.log(equal)}
            ></MathOperations>
        

        </main>)
    }

    export default App