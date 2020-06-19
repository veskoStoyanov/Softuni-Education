import React from 'react';
import { shallow } from 'enzyme'
import {MapContainer} from '../..';

describe('html should render corecttly!', () => {
  
    it("checks for html changes in MapContainer", () => {
        const wrapper = shallow(<MapContainer />);
        expect(wrapper).toMatchSnapshot();
    });  
})