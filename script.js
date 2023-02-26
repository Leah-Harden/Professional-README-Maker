const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');




const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: (value)=>{ if(value){return true} else {return `Please name you project.`}},
        },
        {
        type: 'input',
        name: 'description',
        message: 'What does your product do? Why did you make it and what problem does it solve?',
        validate: (value)=>{ if(value){return true} else {return `Please give a description of your project.`}},
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install this project? What are the necessary files?',
            validate: (value)=>{ if(value){return true} else {return `Please tell me how you to install the files for your project.`}},
            },
        {
        type: 'input',
        name: 'usage',
        message: 'How would you use you product? Where is it a benfit?',
        validate: (value)=>{ if(value){return true} else {return `Please tell me how you are to use your project.`}},
        },
        {
        type: 'input',
        name: 'credits',
        message: 'Who contributed to this project?',
        validate: (value)=>{ if(value){return true} else {return `Please list the devs that worked on this project.`}},
        },
        {
        type: 'input',
        name: 'license',
        message: 'What license would you like to use?',
        validate: (value)=>{ if(value){return true} else {return `Please pick a license for this project.`}},
        },
        {
        type: 'checkbox',
        name: 'badges',
        message: 'What badges would you like to add? ',
        choices: ['Size', 'Your Twitter', 'Window OS', 'Mac OS'],
        },
        {
        type: 'input',
        name: 'features',
        message: 'What are the features that your program has? list them.',
        validate: (value)=>{ if(value){return true} else {return `Please tell me about the feature of your program project.`}},
    },
    {
        type: 'input',
        name: 'how_to_contribute',
        message: 'How do you contribute to this project?',
        validate: (value)=>{ if(value){return true} else {return `Please tell me to contribute to this project.`}},
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test that you have done on this project? How did those test go?',
        validate: (value)=>{ if(value){return true} else {return `Please give example of tests that you did for this project.`}},
    },
]



function generateReadMe(questions) {

    
    const template = `
        
# ${questions.title}

---
## Description
${questions.description}

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how_to_contribute)
- [Tests](#tests)

---
## Installation
${questions.installation}

## Usage
${questionsusage}


## Credits
${credits}


## License
${license}



## Badges
${badges}

## Features
${features}

## How to Contribute
${how_to_contribute}


## Tests
${tests}


`
}



// TODO: Create a function to initialize app
function init() {
    
    inquirer
    .prompt(questions);
    
    // TODO: Create a function to write README file
    
    function write(fileName, data) {
        //fs.writeFile(README.md, generateReadMe(questions), (err) =>
        fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
        );
    }
    write()
}
    // Function call to initialize app
init();


