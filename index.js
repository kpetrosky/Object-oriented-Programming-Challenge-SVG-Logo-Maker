//npm i jest
//npm i inquirer@8.2.4
//npm init -y
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered


function generateReadmeMarkdown(data) {
    // TODO: Generate markdown content for README file based on user's responses
    //generate markdown
    //have to use markdown stringy to use data (readme for chall 9)
    // using professional readme file
    return `
  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.test}
  
  ## License
  
  This project is licensed under the ${data.license} license.
  `;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(`The README was successfully created in ${fileName}.`);
    });
}

function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What three letters will represent your app?',
            },
            {
                type: 'input',
                name: 'text color',
                message: 'What color would you like your text to be?',
            },
            {
                type: 'checkbox',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['Circle', 'Square', 'Triangle']
            },
            {
                type: 'input',
                name: 'shape color',
                message: 'What color would you like your shape to be?',
            },
         
        ])
        .then((response) => {
            const markdown = generateReadmeMarkdown(response);
            writeToFile('README.md', markdown);
        });
}

// Function call to initialize app
init();



