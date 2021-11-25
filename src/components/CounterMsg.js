import React from 'react';
class CounterMsg extends React.Component {
    render() {
        return (
            <p className="text-left">
            Counter value : {this.props.counter}
            </p>
        )
    }
    
}

export default React.memo(CounterMsg);