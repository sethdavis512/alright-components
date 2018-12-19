import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
    const defaultProps = {
        percent: 50
    };

    function renderComponent(props) {
        return shallow(<ProgressBar {...defaultProps} {...props} />);
    }

    it('should getWidthAsPercentOfTotalWidth of 250 with total width of 500 and percent of 50', () => {
        const wrapper = renderComponent({ width: 500 });
        const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
        expect(width).toEqual(250);
    });

    it('should match default snapshot', () => {
        const wrapper = renderComponent();
        expect(wrapper).toMatchSnapshot();
    });
});
