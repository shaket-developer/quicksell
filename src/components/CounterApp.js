import React from 'react';
import CounterItem from '../models/CounterItem';
import ShowLoad from './ShowLoad';
import CounterMsg from './CounterMsg';
import Counter from './Counter';

class CounterApp extends React.Component {
    render() {
        return (
            <>
                <ShowLoad />
                <Counter />
                <CounterMsg />
            </>
        );
    }
}

export default CounterItem(CounterApp);