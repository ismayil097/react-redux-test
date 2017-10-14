import React, { Component } from 'react';
import SearchResult from './search-result';
import axios from 'axios';
const apiKey = '27cb999c93709b76e41d3638da96eb28';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName : '',
      listData: {},
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }
  
  handleSearch = (event) => {  
    this.setState({
      cityName: event.target.value
    });
  }
      
  handleRequest = () => {
    let requestUrl = baseUrl + 'APPID=' + apiKey;
    requestUrl += '&q=' + this.state.cityName; 
    axios.get(requestUrl)
      .then(function (response) {
        const temp = response.data.main.temp;
        const listObj = this.state.listData;
        listObj[this.state.cityName] = temp;
      
        this.setState({
          listData:listObj
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getDataList = () => {
    return Object.entries(this.state.listData);
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