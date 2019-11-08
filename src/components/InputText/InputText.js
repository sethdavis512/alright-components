import React from 'react';
import PropTypes from 'prop-types';

function InputText({ label = 'Label', onChange, value = '' }) {
    return (
        <label>
            {label}
            <input className="input-text" onChange={onChange} value={value} />
        </label>
    );
}

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default InputText;
