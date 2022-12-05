// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
        },
        {
        type: 'input',
        message: 'Enter a short description of this project',
        name: 'description',
        },
        {
        type: 'input',
        message: 'Enter the installation instructions for this project',
        name: 'instructions',
        },
        {
        type: 'input',
        message: 'Enter the usage information for this project',
        name: 'usage',
        },
        {
        type: 'input',
        message: 'Enter any contributions made for this project',
        name: 'contributions',
        },
        {
        type: 'input',
        message: 'Enter test instructions for this project',
        name: 'contributions',
        },
        {
        type: 'list',
        message: 'Choose a license for this project',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified License', 'BSD 3-Clause "Simplified" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        },
        {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username',
        },
        {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
        }
    ])
    .then((answers) => {
        const filename = `${answers.title.toLowerCase().split(' ').join('')}.txt`;

        fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Saved inputs!')
        );
    });



// // TODO: Create an array of questions for user input
// const questions = [
//         {
//         type: 'input',
//         message: 'What is the title of the project?',
//         name: 'title',
//         },
//         {
//         type: 'input',
//         message: 'Enter a short description of this project',
//         name: 'description',
//         },
//         {
//         type: 'input',
//         message: 'Enter the installation instructions for this project',
//         name: 'installation instructions',
//         },
//         {
//         type: 'input',
//         message: 'Enter the usage information for this project',
//         name: 'usage',
//         },
//         {
//         type: 'input',
//         message: 'Enter any contributions made for this project',
//         name: 'contributions',
//         },
//         {
//         type: 'input',
//         message: 'Enter test instructions for this project',
//         name: 'test instructions',
//         },
//         {
//         type: 'list',
//         message: 'Choose a license for this project',
//         name: 'license',
//         choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified License', 'BSD 3-Clause "Simplified" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
//         },
//         {
//         type: 'input',
//         message: 'Enter your GitHub username',
//         name: 'username',
//         },
//         {
//         type: 'input',
//         message: 'Enter your email address',
//         name: 'email',
//         }
// ];

// // TODO: Create a function to write README file
// function writeToFile(questions, data) {
    // fs.writeFile(`${title}`, \n`${description}`, \n`${installation instructions}`, \n`${usage}`, \n`${contributions}`, \n`${test instructions}, \n`${license}`, \n`${username}`, \n`${email}`
// }

// // TODO: Create a function to initialize app
// function init() {
//     writeToFile(questions, data);
// };

// // Function call to initialize app
// init();
