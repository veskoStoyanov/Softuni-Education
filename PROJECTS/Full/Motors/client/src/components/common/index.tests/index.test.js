import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {Footer, NotFound, Preloader, Routes, LoggedIn, LoggedOut} from '../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('Footer should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Footer />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('Preloader should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Preloader />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in NotFound", () => {
        const wrapper = shallow(<NotFound />);
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in Routes", () => {
        const wrapper = shallow(<Routes />);
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in LoggedIn", () => {
        const wrapper = shallow(<LoggedIn />);
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in LoggedOut", () => {
        const wrapper = shallow(<LoggedOut />);
        expect(wrapper).toMatchSnapshot();
    });

    
})

