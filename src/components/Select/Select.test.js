import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('Select', () => {
    const defaultProps = {
        onChange: () => {},
        options: [
            { label: 'Red', value: 'red' },
            { label: 'Green', value: 'green' },
            { label: 'Blue', value: 'blue' }
        ],
        value: 'Green'
    };

    function renderComponent(props) {
        return shallow(<Select {...defaultProps} {...props} />);
    }

    it('should match snapshot', () => {
        const wrapper = renderComponent();
        expect(wrapper).toMatchSnapshot();
    });
});
