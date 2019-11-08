module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('Component Generator', {
        description: 'Makes hooks based components.',
        prompts: [
            {
                type: 'input',
                name: 'componentName',
                message: 'what would you like to name your component?'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase componentName}}/index.js',
                templateFile: 'plop-templates/component/component-index.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.js',
                templateFile: 'plop-templates/component/component-hooks.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.test.js',
                templateFile: 'plop-templates/component/component-test.js.hbs',
            }
        ]
    });
};  