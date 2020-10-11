import React from 'react';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { ContactDetails, ListContacts, PostContact, Contact, ContactForm } from '../..';

const mockStore = configureMockStore([thunk]);

describe('redux should render corecttly!', () => {
    it('ContactDetails should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <ContactDetails />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('ListContacts should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <ListContacts />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it('PostContact should work properly!', () => {
        const store = mockStore({
            startup: { complete: false }
        });
        const wrapper = shallow(
            <Provider store={store}>
                <PostContact />
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in Contact", () => {
        const wrapper = shallow(<Contact />);
        expect(wrapper).toMatchSnapshot();
    });

    it("checks for html changes in ContactForm", () => {
        const wrapper = shallow(<ContactForm />);
        expect(wrapper).toMatchSnapshot();
    });
})

