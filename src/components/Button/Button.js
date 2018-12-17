import React from 'react';
import PropTypes from 'prop-types';

/** A really great button Button component. */
function Button({ text, type }) {
    return <button type={type}>{text}</button>;
}

Button.defaultProps = {
    text: 'Button',
    type: 'button'
};

Button.propTypes = {
    /** Button Text */
    text: PropTypes.string.isRequired,
    /** Button Type */
    type: PropTypes.string
};

export default Button;
