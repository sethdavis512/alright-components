import React from 'react';
import PropTypes from 'prop-types';

function Select({ label, onChange, options }) {
    const mappedOptions = options.map(option => (
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
    ));
    return (
        <div className="inline-block relative w-64">
            <label>{label}</label>
            <select className="select" onChange={onChange}>
                {mappedOptions}
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );
}

Select.propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};

Select.defaultProps = {
    options: [{ label: 'Option 1', value: 1 }]
};

export default Select;
