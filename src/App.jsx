import React, { Component } from "react";
import "./App.css";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { returnData } from "./components/data";

const API_KEY = "70ab0ca0b6c30f20754e69cfb271f1ca";
// const url =
//   "http://api.openweathermap.org/data/2.5/weather?lat=48.13&lon=17.12&APPID=70ab0ca0b6c30f20754e69cfb271f1ca";
const url = "http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&APPID=70ab0ca0b6c30f20754e69cfb271f1ca";

const fakeData = returnData();

class App extends Component {
  getWeather = e => {
    e.preventDefault();

    const apiCall = fetch(url, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(data => console.log(data)).catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Titles />
        <Form handleGetWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
