import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showCode: false };
    }

    toggleCode = event => {
        event.preventDefault();
        this.setState(prevState => {
            return { showCode: !prevState.showCode };
        });
    };

    render() {
        const { showCode } = this.state;
        const { code, description, name } = this.props.example;
        // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
        const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`)
            .default;
        return (
            <div className="mb-4">
                <div className="mb-4 font-bold">
                    {description && <p>{description}</p>}
                </div>
                <div className="rounded px-6 py-8 mb-4 border border-2">
                    <ExampleComponent />
                </div>
                <div className="rounded px-6 py-8 mb-4 border border-2 bg-gray-800">
                    <ExampleComponent />
                </div>
                <button className="button mb-4" onClick={this.toggleCode}>
                    {showCode ? 'Hide' : 'Show'} Code
                </button>
                <div>{showCode && <CodeExample>{code}</CodeExample>}</div>
            </div>
        );
    }
}

Example.propTypes = {
    example: PropTypes.object.isRequired,
    componentName: PropTypes.string.isRequired
};

export default Example;
