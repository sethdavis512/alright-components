import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
    getColor = () => {
        if (this.props.percent === 100) return 'green';
        return this.props.percent > 50
            ? 'gold'
            : this.props.percent > 25
            ? 'red'
            : 'firebrick';
    };

    getWidthAsPercentOfTotalWidth = () => {
        return parseInt(this.props.width * (this.props.percent / 100), 10);
    };

    render() {
        const { percent, width, height } = this.props;
        return (
            <div
                style={{
                    border: '1px solid lightgray',
                    width,
                    borderRadius: '4px'
                }}
            >
                <div
                    style={{
                        width: this.getWidthAsPercentOfTotalWidth(),
                        height,
                        backgroundColor: this.getColor(percent)
                    }}
                />
            </div>
        );
    }
}

ProgressBar.defaultProps = {
    height: 20,
    width: 200
};

ProgressBar.propTypes = {
    percent: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number
};

export default ProgressBar;
