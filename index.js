const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./Develop/js/shapes');

const promptUser = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter text for logo. (Must not be more than 3 characters.)',
                name: 'text',
            },
            {
                type: 'input',
                message: 'Enter a text color',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'Select a shape for the logo',
                name: 'shape',
                choices: ['Triangle', 'Circle', 'Square']
            },
            {
                type: 'input',
                message: 'Enter a shape color',
                name: 'shapeColor',
            },
        ]);
};


const init = () => {
    promptUser();
    .then(({ text, textColor, shape, shapeColor }) => {
        Shapes(text, textColor, shape, shapeColor).render();
    })

};



init();
