import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {ProfileHotel, Reservation} from '../../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('ProfileHotel should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <ProfileHotel />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('Reservation should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Reservation />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    
})