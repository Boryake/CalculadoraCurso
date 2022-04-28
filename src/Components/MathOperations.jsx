import React from "react"
import PropTypes from "prop-types"
import Button from  "./Button"

const MathOperations = ({onClikOperation, onClickEqual})=>(
    <section className="math-operations">
    <Button text="+"clickHandler={onClikOperation}></Button>
    <Button text="-"clickHandler={onClikOperation}></Button>
    <Button text="*"clickHandler={onClikOperation}></Button>
    <Button text="/"clickHandler={onClikOperation}></Button>
    <Button text="="clickHandler={onClickEqual}></Button>
    </section>
)

MathOperations.propTypes ={
    onClickEqual : PropTypes.func.isRequired, 
    onClikOperation : PropTypes.func.isRequired  
}

export default MathOperations
