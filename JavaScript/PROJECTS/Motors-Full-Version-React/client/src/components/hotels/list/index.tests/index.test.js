import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {Main, SearchHotels, Hotel} from '../../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('Main should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Main />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('SearchHotels should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <SearchHotels />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('Hotel should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Hotel />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
    

    
})