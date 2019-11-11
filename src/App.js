import React from 'react';
import './App.css';
import Checklist from './components/Checklist'

class App extends React.Component{
  state = {
    list: [
      {
        itemId: 1,
        name: 'Check Passport expiry date after at least 6 months',
        done: false
      },
      {
        itemId: 2,
        name: '6 months Bank Statement',
        done: false
      },
      {
        itemId: 1,
        name: '3 months Salary Slip',
        done: false
      },
      {
        itemId: 1,
        name: 'Financial proofs',
        done: false
      },
      {
        itemId: 1,
        name: 'i20 of Universities',
        done: false
      },
      {
        itemId: 1,
        name: 'Admission letters from Universities',
        done: false
      },
      {
        itemId: 1,
        name: 'DS-160 form printout',
        done: false
      },
      {
        itemId: 1,
        name: 'Receipt of payments for DS-160 and SEVIS',
        done: false
      }
    ]
  }
  render() {
    return (
      <div className="App" style= {{backgroundColor:'#3CB371', width: '500px'}}>
      <div style= {{backgroundColor:'#006400', color:'white'}}>
        <h2>Checklist for F1 visa interview</h2>
      </div>
        <Checklist list = {this.state.list}/>
      </div>
    );
  }
}

export default App;
