import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {MotoEdit, MotoEDitForm} from '../../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('MotoEdit should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <MotoEdit />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in MotoEDitForm", () => {
        const wrapper = shallow(<MotoEDitForm />);
        expect(wrapper).toMatchSnapshot();
    });

    
})