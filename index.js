const inquirer = require('inquirer');
const {Square,Circle,Triangle} = require('./Develop/js/shapes');
const Svg = require('./Develop/js/svg');

const promptUser = () => {
    inquirer.prompt([
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
    promptUser()
    .then(({ text, textColor, shape, shapeColor }) => {
        if (shape === 'Triangle') {
            const tri=new Triangle()
            tri.setColor(shapeColor);
        }
        if (shape === 'Circle') {
            const cir = new Circle()
            cir.setColor(shapeColor);

        }
        if (shape === 'Square') {
            const squ = new Square()
            squ.setColor(shapeColor);

        }
        Svg.setText(text, textColor);




    })

};



init();
