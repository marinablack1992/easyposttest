import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
      // snapshots of returned information from calls:
      toAddressObj: {},
      fromAddressObj: {},
      parcelObj: {},
      shipmentObj: {},

      // to inputs:

      toStreet1: '',
      toCity: '',
      toState: '',
      toZip: '',
      toCountry: '',
      toCompany: '',
      toPhone: '',

      // from inputs:
      fromStreet1: '',
      fromCity: '',
      fromState: '',
      fromZip: '',
      fromCountry: '',
      fromCompany: '',
      fromPhone: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop, val) {
    this.setState({ [prop]: val })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className='toAddress'>
          <h1>To: </h1>
          <h2>Street1</h2><input onChange={(e) => this.handleChange('toStreet1', e.target.value)}></input>
          <h2>City</h2><input onChange={(e) => this.handleChange('toCity', e.target.value)}></input>
          <h2>State</h2><input onChange={(e) => this.handleChange('toState', e.target.value)}></input>
          <h2>Zip</h2><input onChange={(e) => this.handleChange('toZip', e.target.value)}></input>
          <h2>Country</h2><input onChange={(e) => this.handleChange('toCountry', e.target.value)}></input>
          <h2>Company</h2><input onChange={(e) => this.handleChange('toCompany', e.target.value)}></input>
          <h2>Phone</h2><input onChange={(e) => this.handleChange('toPhone', e.target.value)}></input>
        </div>
      </div>
    );
  }
}

export default App;