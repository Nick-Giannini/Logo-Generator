const inquirer = require('inquirer');
const {Square,Circle,Triangle} = require('./lib/shapes');
const Svg = require('./lib/svg');
const fs = require('fs');



const promptUser = [
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
        ];

const init = () => {
    inquirer.prompt(promptUser)
    .then(({ text, textColor, shape, shapeColor }) => {
        let userShape;


        if (shape === 'Triangle') {
            userShape=new Triangle()
            userShape.setColor(shapeColor);
        }
        if (shape === 'Circle') {
            userShape = new Circle()
            userShape.setColor(shapeColor);

        }
        if (shape === 'Square') {
            userShape = new Square()
            userShape.setColor(shapeColor);

        }
        let logo=new Svg;
        logo.setText(text, textColor);
        logo.setShape(userShape);

        fs.writeFileSync('./examples/logo.svg', logo.render())

    })

};



init();
