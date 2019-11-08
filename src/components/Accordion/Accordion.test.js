import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';

describe('Accordion', () => {
    const defaultProps = {};

    function shallowComponent(props) {
        return shallow(<Accordion {...defaultProps} {...props} />);
    }

    it('should match default snapshot', () => {
        const wrapper = renderComponent();
        expect(wrapper).toMatchSnapshot();
    });
});
