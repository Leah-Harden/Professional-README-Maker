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
let licenseBadgevar = "";
let licenseDescription = "";
    //[![License](https://img.shields.io/badge/License-${questions.license_badge}-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
    const template = `
        
# ${questions.title}

## License ${questions.license_badge}
${licenseBadgevar}
${licenseDescription}
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
## Questions through GitHub
If you have any question of suggestion here is my get Github to contact me.
${questions.questions_GitHub}

## Questions through Email
If you have any futher questions here is my email.
${questions.questions_email}
`
    return template
}



function licenseBadge(answers) {
    let licenseBadgeVar;
    let licenseDescription;
    
    if (answers.license_badge === 'MIT') {
        licenseBadgeVar = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        licenseDescription = `Permission is hereby granted, free of charge,
        to any person obtaining a copy of this software and associated documentation 
        files (the “Software”), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish, distribute,
        sublicense, and/or sell copies of the Software, and to permit persons to whom the 
        Software is furnished to do so, subject to the following conditions:.`
    } else if (answers.license_badge === 'Boost') {
        licenseBadgeVar = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        licenseDescription = `Permission is hereby granted, free of charge, to any person or organization
        obtaining a copy of the software and accompanying documentation covered by
        this license (the "Software") to use, reproduce, display, distribute,
        execute, and transmit the Software, and to prepare derivative works of the
        Software, and to permit third-parties to whom the Software is furnished to
        do so, all subject to the following:`;
    } else if (answers.license_badge === 'Mozilla Public License 2.0') {
        licenseBadgeVar = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        licenseDescription = `Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license:
        under intellectual property rights (other than patent or trademark) Licensable
        by such Contributor to use, reproduce, make available, modify, display, perform, distribute, 
        and otherwise exploit its Contributions, either on an unmodified basis, with Modifications, or as part of a Larger Work; and
        under Patent Claims of such Contributor to make, use, sell, offer for sale, have made, import, 
        and otherwise transfer either its Contributions or its Contributor Version.`;
    } else {
        licenseBadgeVar = ''; // no license badge
        licenseDescription = 'Default copyright laws apply.';
    }
    return [ licenseBadgeVar, licenseDescription ]
    
    
}
function writefile(fileName, answers) {
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
                //console.log(answers, "answers"),
                licenseBadge(answers)
                const badgesData = licenseBadge(answers);
                // Answers = { item: answers }
                // Answers.newItem = "value"; 
                
                //    .then((response) => {
                    //        concat(answers,response)
                    writefile(fileName, answers)
                    //    })
                })
    // TODO: Create a function to write README file
}
// Function call to initialize app
init();


