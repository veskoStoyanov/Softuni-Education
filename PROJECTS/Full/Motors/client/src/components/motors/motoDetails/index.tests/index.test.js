import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {BanBtn, Like, MotoDetails} from '../../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('BanBtn should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <BanBtn />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('Like should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Like />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('MotoDetails should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <MotoDetails />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
})