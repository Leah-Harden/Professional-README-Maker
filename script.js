const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');




const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: (value) => { if (value) { return true } else { return `Please name you project.` } },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does your product do? Why did you make it and what problem does it solve?',
        validate: (value) => { if (value) { return true } else { return `Please give a description of your project.` } },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project? What are the necessary files?',
        validate: (value) => { if (value) { return true } else { return `Please tell me how you to install the files for your project.` } },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you use you product? Where is it a benfit?',
        validate: (value) => { if (value) { return true } else { return `Please tell me how you are to use your project.` } },
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who contributed to this project?',
        validate: (value) => { if (value) { return true } else { return `Please list the devs that worked on this project.` } },
    },
    // {
    //     type: 'input',
    //     name: 'license',
    //     message: 'What license would you like to use?',
    //     validate: (value) => { if (value) { return true } else { return `Please pick a license for this project.` } },
    // },
    {
        type: 'checkbox',
        name: 'license_badge',
        message: 'What license badge would you like to add? ',
        choices: ['MIT', 'Boost', 'Mozilla Public License 2.0', 'None/Default'],
        validate: (value) => { if (value) { return true } else { return `Please pick a license for this project.` } },
            //if(value){console.log(value)} {return true};`
            // if (value = 'Boost') value = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)` +
            //     `The Boost License means: `
            //TypeError: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" is not a function

        },
    {
        type: 'input',
        name: 'features',
        message: 'What are the features that your program has? list them.',
        validate: (value) => { if (value) { return true } else { return `Please tell me about the feature of your program project.` } },
    },
    {
        type: 'input',
        name: 'how_to_contribute',
        message: 'How do you contribute to this project?',
        validate: (value) => { if (value) { return true } else { return `Please tell me to contribute to this project.` } },
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test that you have done on this project? How did those test go?',
        validate: (value) => { if (value) { return true } else { return `Please give example of tests that you did for this project.` } },
    },
    {
        type: 'input',
        name: 'questions_GitHub',
        message: 'What is your GitHub username?',
        validate: (value) => { if (value) { return true } else { return `Please give your GitHub username.` } },
    },
    {
        type: 'input',
        name: 'questions_email',
        message: 'What is your email?',
        validate: (value) => { if (value) { return true } else { return `Please give your email.` } },
    },
]



function generateReadMe(questions) {


    const template = `
        
# ${questions.title}

${questions.license_badge}
[![License](https://img.shields.io/badge/License-${questions.license_badge}-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
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
${questions.usage}


## Credits
${questions.credits}

## Features
${questions.features}

## How to Contribute
${questions.how_to_contribute}


## Tests
${questions.tests}

---
## Questions thought GitHub
If you have any question of suggestion here is my get Github to contact me.
${questions.questions_GitHub}

## Questions thought Email
If you have any futher questions here is my email.
${questions.questions_email}
`
    return template
}



function writefile(fileName, answers) {
    //fs.writeFile(README.md, generateReadMe(questions), (err) =>
    data = generateReadMe(answers)
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!'),
    );
}
// TODO: Create a function to initialize app
function init() {

    fileName = "README.md",
        inquirer
            .prompt(questions)
            .then((answers) => {
                console.log(answers, "answers"),
                    writefile(fileName, answers)
            })
    // TODO: Create a function to write README file
}
// Function call to initialize app
init();


