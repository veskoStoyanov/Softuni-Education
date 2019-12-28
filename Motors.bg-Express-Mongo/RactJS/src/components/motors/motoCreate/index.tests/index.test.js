import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {MotoCreate, MotoCreateForm, SelectControl} from '../../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('MotoCreate should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <MotoCreate />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
    it("checks for html changes in MotoCreateForm", () => {
        const wrapper = shallow(<MotoCreateForm />);
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in SelectControl", () => {
        const wrapper = shallow(<SelectControl />);
        expect(wrapper).toMatchSnapshot();
    });
})