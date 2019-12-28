import React from "react";

const WeatherForm = props => (<form onSubmit={props.getWeather}>
		<input onChange={props.handleOnChange} value={props.location || ''} type="text" name="city" placeholder="City..."/>
		<input onChange={props.handleOnChange} value='bg' type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>);

export default WeatherForm;