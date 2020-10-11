import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {Comment, CommentCreate, CommentPost} from '../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('CommentPost should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <CommentPost />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('CommentCreate should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <CommentCreate />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('Comment should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Comment />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
})