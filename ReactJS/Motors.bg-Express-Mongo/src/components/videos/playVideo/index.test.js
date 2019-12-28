import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {DeleteVideoBtn, VideoPlay} from '../../';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('DeleteVideoBtn should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <DeleteVideoBtn />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('VideoPlay should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <VideoPlay />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    
})