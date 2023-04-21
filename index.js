const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
//one for triangle
//one for square
const SVG = require('./lib/svg')

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        // console.log(`);
    });
}

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What three letters will represent your app?',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color would you like your text to be?',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['Circle', 'Square', 'Triangle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like your shape to be?',
            },
         
        ])
        //promise once questions are answer then it will do it what i have asked it to do
        .then((answers) => {
            console.log(answers);
            let shape;
            if (answers.shape === 'Circle') {
                shape = new Circle();
            } else {
                console.log('add stuff here'); 
            }
            shape.setColor(answers.shapeColor);
            let shapeRender = shape.render();
            const login = new SVG(shapeRender, answers.title, answers.textColor);
          writeToFile('logo.svg', login.render());  
        } )

}

// Function call to initialize app
init();



//trying to get current to commit so i can pull from git hub