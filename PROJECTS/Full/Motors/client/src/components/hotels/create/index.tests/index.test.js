import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {PanelHotel, Panel, HotelForm} from '../../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('PanelHotel should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <PanelHotel />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('Panel should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Panel />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in HotelForm", () => {
        const wrapper = shallow(<HotelForm />);
        expect(wrapper).toMatchSnapshot();
    });

    
})