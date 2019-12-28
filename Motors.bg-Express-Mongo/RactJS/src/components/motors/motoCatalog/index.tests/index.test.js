import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {Catalog, Search, Motor, SortBtn} from '../../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('Catalog should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Catalog />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('Search should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Search />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in Motor", () => {
        const wrapper = shallow(<Motor />);
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in SortBtn", () => {
        const wrapper = shallow(<SortBtn />);
        expect(wrapper).toMatchSnapshot();
    });

})