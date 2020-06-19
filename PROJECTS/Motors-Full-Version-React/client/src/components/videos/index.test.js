import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {VideoCreate, VideoPost, Video} from '../';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('VideoCreate should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <VideoCreate />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('VideoPost should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <VideoPost />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in Video", () => {
        const wrapper = shallow(<Video />);
        expect(wrapper).toMatchSnapshot();
    });
    
})