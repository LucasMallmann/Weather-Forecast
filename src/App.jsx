import React, { Component } from "react";
import "./App.css";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { returnData } from "./components/data";

const API_KEY = "70ab0ca0b6c30f20754e69cfb271f1ca";

class App extends Component {
  state = {
    temperature: undefined,
    city: "",
    country: "",
    humidity: undefined,
    error: undefined
  };

  getWeather = e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const query = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;

    if (city && country) {
      const apiCall = fetch(query)
        .then(response => response.json())
        .then(jsonData => {
          this.setState({
            temperature: jsonData.main.temp,
            city: jsonData.name,
            country: jsonData.sys.country,
            humidity: jsonData.main.humidity,
            description: jsonData.weather[0].description,
            error: ""
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="App">
        <Titles />
        <Form handleGetWeather={this.getWeather} />

        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
