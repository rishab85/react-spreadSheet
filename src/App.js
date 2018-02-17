import React, { Component } from 'react';
import Table from './components/Table';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{width:'max-content'}}>
          <Table x={5} y={4}/>
        </div>
      </div>
    );
  }
}

export default App;
