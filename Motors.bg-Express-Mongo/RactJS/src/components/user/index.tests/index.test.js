import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {Login, LoginForm, Logout, Register, RegisterForm} from '../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('Login should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Login />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('Logout should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Logout />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('Register should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Register />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in LoginForm", () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in RegisterForm", () => {
        const wrapper = shallow(<RegisterForm />);
        expect(wrapper).toMatchSnapshot();
    });
   
})

