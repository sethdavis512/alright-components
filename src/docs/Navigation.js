import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ components }) => {
    return (
        <ul className="navigation">
            {components.map(name => {
                return (
                    <li className="hover:bg-gray-900 text-white" key={name}>
                        <a className="px-6 py-2 block" href={`#${name}`}>
                            {name}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

Navigation.propTypes = {
    components: PropTypes.array.isRequired
};

export default Navigation;
