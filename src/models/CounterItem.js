import React from 'react';
import axios from 'axios';
import CounterMsg from '../components/CounterMsg';
import ShowLoad from '../components/ShowLoad';
import Counter from '../components/Counter';

export default class CounterItem extends React.Component {
    requestToken;
    constructor() {
        super();
        this.state = {
            counter: 1,
            maxValue: Number(process.env.REACT_APP_MAX_VALUE) || 1000,
            isSaving: false
        }
    }

    setCounter(value, callback) {
        if(value <= this.state.maxValue) {
            this.setState({counter: value}, () => {
                if(typeof callback === 'function') {
                    callback()
                }
            });
        }
    }

    saveCounter() {
        if(this.state.isSaving) {
            this.requestToken.cancel();
        }
        this.setState({isSaving: true});
        const req = {[process.env.REACT_APP_MOBILE_NUMBER]: this.state.counter};
        this.requestToken = axios.CancelToken.source();
        axios.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', req, {
            cancelToken: this.requestToken.token,
            }).then(
            (res) => console.log(res)
        ).catch(error => console.log(error)).finally(() => this.setState({isSaving: false}))
    }

    componentDidMount() {
        axios.get(`https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json`)
        .then(response => {
            if(response.data !== null) {
                this.setCounter(response.data)
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <>
                <ShowLoad saving = {this.state.isSaving} />
                <Counter counterState = { this.state } setCounter = { this.setCounter.bind(this) } saveCounter = { this.saveCounter.bind(this) }/>
                <CounterMsg counter = { this.state.counter } />
            </>
        )
    }
}
