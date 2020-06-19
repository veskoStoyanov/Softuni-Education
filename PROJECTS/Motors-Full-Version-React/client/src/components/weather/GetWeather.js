import React, { Component } from "react";

import { WeatherForm, Weather } from '../'

import {withAuthLogged} from '../../infrastructore/hocs';

import './weather.css';

const API_KEY = "3c50df7ebef97b2ec1eeb082e6640920";

class GetWeather extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }

  handleOnChange = ev => {
    let inputName = ev.target.name;
    let inputValue = ev.target.value;

    this.setState({
      [inputName]: inputValue
    });
  }

  render() {  
      return (
        <div id="weather">
          <div className="col-xs-7 form-container inp">
          <WeatherForm handleOnChange={this.handleOnChange} 
            location={this.props.match.params.location} 
            getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
        </div>
      );
    }
};

GetWeather = withAuthLogged(GetWeather);
export default GetWeather;