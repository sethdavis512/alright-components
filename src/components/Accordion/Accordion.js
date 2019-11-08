import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** An alright component. */
function Accordion({ children }) {
    return (
        <div>{ children }</div>
    );
}

Accordion.propTypes = {
    /** Accordion children */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Accordion;