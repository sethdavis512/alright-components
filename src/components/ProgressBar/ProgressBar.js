import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ percent, width = 200, height = 20 }) {
    const getColor = () => {
        if (percent === 100) return 'green';
        return percent > 50 ? 'gold' : percent > 25 ? 'red' : 'firebrick';
    };
    const getWidthAsPercentOfTotalWidth = () => {
        return parseInt(width * (percent / 100), 10);
    };

    return (
        <div
            className="border border-gray-900 shadow-md overflow-hidden rounded-lg"
            style={{ width }}
        >
            <div
                style={{
                    width: getWidthAsPercentOfTotalWidth(),
                    height,
                    backgroundColor: getColor(percent)
                }}
            />
        </div>
    );
}

ProgressBar.propTypes = {
    percent: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number
};

export default ProgressBar;
