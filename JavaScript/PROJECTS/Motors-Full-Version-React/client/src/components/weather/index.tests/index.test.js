import React from 'react';
import { shallow } from 'enzyme'
import {GetWeather, Weather, WeatherForm} from '../..';

describe('html should render corecttly!', () => {
  
    it("checks for html changes in GetWeather", () => {
        const wrapper = shallow(<GetWeather />);
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in Weather", () => {
        const wrapper = shallow(<Weather />);
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in WeatherForm", () => {
        const wrapper = shallow(<WeatherForm />);
        expect(wrapper).toMatchSnapshot();
    });
    
})