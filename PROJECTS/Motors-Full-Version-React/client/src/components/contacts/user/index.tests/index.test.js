import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {Box, DetailsBox, Inbox, Recent, SearchUser, Sent} from '../../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('Box should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <Box />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('DetailsBox should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <DetailsBox />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
    
    it("checks for html changes in Inbox", () => {
        const wrapper = shallow(<Inbox />);
        expect(wrapper).toMatchSnapshot();
      });

      it("checks for html changes in Recent", () => {
        const wrapper = shallow(<Recent />);
        expect(wrapper).toMatchSnapshot();
      });

      it("checks for html changes in SearchUser", () => {
        const wrapper = shallow(<SearchUser />);
        expect(wrapper).toMatchSnapshot();
      });

      it("checks for html changes in Sent", () => {
        const wrapper = shallow(<Sent />);
        expect(wrapper).toMatchSnapshot();
      });
})

