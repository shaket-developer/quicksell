import React from 'react';
class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    calculateCounter(operation, value) {
        const {maxValue, counter} = this.props.counterState;
        let updatedValue;
        if (operation === 'ADD') {
            updatedValue = counter + value;
        } else if (operation === 'SUBTRACT') {
            updatedValue = counter - value;
        } else if (operation === 'CHANGE') {
            updatedValue = Number(value)
        }
        if(updatedValue <= maxValue) {
            this.props.setCounter(updatedValue, this.props.saveCounter);
        }
    }

    render() {
        const addButtonClass = ((this.props.counterState.maxValue - this.props.counterState.counter) === 0 ) ? 'disabled' : '';
        return (
            <div className = "counterUpdate d-flex m-auto">
            <button onClick = {() => this.calculateCounter('SUBTRACT', 1)} >-</button>
            <input type="text" value={this.props.counterState.counter} onChange={(e) => this.calculateCounter('CHANGE', e.target.value)} />
            <button onClick = {() => this.calculateCounter('ADD', 1)} className = {addButtonClass}>+</button>
            </div> 
        )
    }
    
}

export default React.memo(Counter);