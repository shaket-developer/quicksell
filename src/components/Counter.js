import React from 'react';
class Counter extends React.Component {
    constructor(props) {
        console.log("Counter called");
        super(props);
    }
    calculateCounter(operation, value) {
        
        if((operation === 'CHANGE' && value <= 1000) || (operation === 'ADD' && value < 1000) || operation === 'SUBTRACT') {
            if (operation === 'ADD') {
                this.props.setCounter(this.props.counterState.counter + value, this.props.saveCounter);
            } else if (operation === 'SUBTRACT') {
                this.props.setCounter(this.props.counterState.counter - value, this.props.saveCounter);
            } else if (operation === 'CHANGE') {
                this.props.setCounter(Number(value), this.props.saveCounter);
            }
        }
    }

    render() {
        
        return (
            <div className = "counterUpdate d-flex m-auto">
            <button onClick = {() => this.calculateCounter('SUBTRACT', 1)}>-</button>
            <input type="text" value={this.props.counterState.counter} onChange={(e) => this.calculateCounter('CHANGE', e.target.value)} />
            <button onClick = {() => this.calculateCounter('ADD', 1)}>+</button>
            </div> 
        )
    }
    
}

export default Counter;