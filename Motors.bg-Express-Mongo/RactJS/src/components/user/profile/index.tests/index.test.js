import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {Moto, Profile, UnbanBtn, UserBtn} from '../../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('Profile should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Profile />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('UnbanBtn should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <UnbanBtn />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('UserBtn should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <UserBtn />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in Moto", () => {
        const wrapper = shallow(<Moto />);
        expect(wrapper).toMatchSnapshot();
    });
 
})

