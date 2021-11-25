import React from 'react';
import CounterItem from '../models/CounterItem';
class CounterMsg extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <p className="text-left">
            Counter value : {this.props.counter}
            </p>
        )
    }
    
}

export default CounterMsg;