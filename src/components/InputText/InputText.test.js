import React from 'react';
import { shallow } from 'enzyme';
import InputText from './InputText';

describe('InputText', () => {
    const defaultProps = {
        label: 'Default Label',
        onChange: jest.fn(),
        value: ''
    };

    function renderComponent(props) {
        return shallow(<InputText {...defaultProps} {...props} />);
    }

    it('should match snapshot', () => {
        const wrapper = renderComponent();
        expect(wrapper).toMatchSnapshot();
    });
});
