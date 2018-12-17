import React from 'react';
import PropTypes from 'prop-types';

function Select({ label, onChange, options }) {
    const mappedOptions = options.map(option => (
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
    ));
    return (
        <label>
            {label}
            <select onChange={onChange}>{mappedOptions}</select>
        </label>
    );
}

Select.defaultProps = {
    options: [{ label: 'Option 1', value: 1 }]
};

Select.propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};

export default Select;
