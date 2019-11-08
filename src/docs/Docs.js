import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

export default function Docs() {
    const [route, setRoute] = useState(window.location.hash.substr(1));
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1));
        });

        return () =>
            window.removeEventListener('hashchange', () => {
                setRoute(window.location.hash.substr(1));
            });
    }, []);

    const component = route
        ? componentData.filter(component => component.name === route)[0]
        : componentData[0];

    const docClassName = classnames('flex h-full', {
        'is-dark': isDark
    });

    return (
        <div className={docClassName}>
            <div className="w-1/4 bg-gray-800 mr-6 pt-8 pb-4">
                <Navigation
                    components={componentData.map(component => component.name)}
                />
            </div>
            <div className="w-3/4 pt-8 pr-8 overflow-y-auto">
                <input
                    id="darkModeCheckbox"
                    type="checkbox"
                    checked={isDark}
                    onChange={() => setIsDark(!isDark)}
                />
                <label htmlFor="darkModeCheckbox">
                    {isDark ? 'Regular' : 'Dark'} Mode?
                </label>
                <h1>Alright Components</h1>
                <ComponentPage component={component} />
            </div>
        </div>
    );
}
