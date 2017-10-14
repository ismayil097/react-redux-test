import React, { Component } from 'react';
import axios from 'axios';
const apiKey = '27cb999c93709b76e41d3638da96eb28';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName : '',
      unit: 'C'
    };

  }

  handleSearch = (event) => {
    this.setState({
      cityName: event.target.value
    });
  }

  componentWillReceiveProps() {
    console.log("log me");
    // const {unit} = this.state.unit;
    // this.state.unit = this.props.unit;
    // this.handleRequest();
  }


  handleRequest = () => {
    let requestUrl = baseUrl + 'APPID=' + apiKey;
    switch (this.state.unit) {
      case "F":
        requestUrl += '&q=' + this.state.cityName + '&units=imperial';
        break;
      case "C":
        requestUrl += '&q=' + this.state.cityName + '&units=metric';
        console.log(requestUrl);
        break;
      case "K":
        requestUrl += '&q=' + this.state.cityName;
        break;
    }
    axios.get(requestUrl)
      .then((response) => {
        this._successMessage(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  _successMessage = (response) => {
    const temp = response.data.main.temp;
    this.props.getResults({
      name: this.state.cityName,
      value: temp,
      unit: 'C'
    })

  }

   render() {
      return (
         <div>
            <input value={this.state.cityName} type="text" placeholder="find city" onChange = {this.handleSearch} />
            <button onClick = {this.handleRequest}>Add city</button>
            <button>Clear</button>
         </div>
      );
   }



}




export default Search;
