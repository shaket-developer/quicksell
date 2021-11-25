import './App.css';
import React from 'react';
import CounterItem from './models/CounterItem';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="counter flex-columns d-flex m-auto" >
          <CounterItem />
        </div> 
      </div>
    )
  }
}

export default App;
