const fs = require('fs');
const inquirer = require('inquirer');
let generateMarkdown = require('./utils/generateMarkdown')

function questions(){
  return inquirer.prompt([
    { 
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title'
    },
    { 
      type: 'input',
      message: 'Enter a short description of this project',
      name: 'description'
    },
    { 
      type: 'input',
      message: 'Enter the installation instructions for this project',
      name: 'installationInstructions'
    },
    { 
      type: 'input',
      message: 'Insert a mockup for this project and enter what this mockup shows',
      name: 'mockUp'
    },
    { 
      type: 'input',
      message: 'Enter the usage information for this project',
      name: 'usage'
    },
    {
      type: 'input',
      message: 'Enter any contributions made for this project',
      name: 'contributions'
    },
    {
      type: 'input',
      message: 'Enter test instructions for this project',
      name: 'testInstructions'
    },
    {
      type: 'list',
      message: 'Choose a license for this project',
      name: 'license',
      choices: ['Apache License 2.0', 'MIT License', 'Eclipse Public License 2.0', 'N/A']
    },
    {
      type: 'input',
      message: 'Enter your GitHub username',
      name: 'username'
    },
    {
      type: 'input',
      message: 'Enter your email address',
      name: 'email'
    }
  ])
};

function generateREADME(title, data){
  fs.writeFile('README.md', data,
    (err) => err ? console.error(err) : console.log(`${title}.md has been created.`));
};

function init() {
  let userInput = questions().then((answers)=>{
    generateREADME((answers.title),(generateMarkdown(answers)));
  })
  
};

init();