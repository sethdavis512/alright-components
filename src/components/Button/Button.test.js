import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    const defaultProps = {
        text: 'Send',
        type: 'submit'
    };

    function renderComponent(props) {
        return shallow(<Button {...defaultProps} {...props} />);
    }

    it('should match submit button snapshot', () => {
        const wrapper = renderComponent();
        expect(wrapper).toMatchSnapshot();
    });

    it('should match regular button snapshot', () => {
        const wrapper = renderComponent({
            text: 'Add',
            type: 'button'
        });
        expect(wrapper).toMatchSnapshot();
    });
});
