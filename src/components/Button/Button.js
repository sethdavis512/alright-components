import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/** A really great button Button component. */
function Button({ className = '', text = 'Button', type = 'button' }) {
    const buttonClassName = classnames('button', className);
    return (
        <button className={buttonClassName} type={type}>
            {text}
        </button>
    );
}

Button.propTypes = {
    /** Button class name */
    className: PropTypes.string,

    /** Button text */
    text: PropTypes.string.isRequired,

    /** Button type */
    type: PropTypes.string
};

export default Button;
