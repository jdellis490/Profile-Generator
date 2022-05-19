// Universal constructor and required classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Packages for questions and write file function
const inquirer = require('inquirer');
const fs = require('fs');

// Question for team name

function teamPrompt() {
    inquirer.prompt([
        { type: 'input',
          name: 'teamname',
          message: 'What is the team name?'
        }
    ]).then((answers) => {
        const teamName = answers.teamname;
    
    })
};

// Questions for manager class
function newManager() {
    inquirer.prompt( [
    {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
    },
    {   type: "input",
        name: "id",
        message: "What is the Manager's ID?"
    },
    {   type: "input",
        name: "email",
        message: "What is the Manager's email?",
    },
    {   type: "input",
        name: "officenumber",
        message: "What is the office number?",
    },
]).then((answers) => {
    const role = 'Manager'
    const name = answers.name;
    const id = answers.id;
    const email = answers.email;
    const officeNumber = answers.officenumber;
    const employee = new Manager(name, id, email, officeNumber, role);
    })
};

newEmployee();
teamPrompt();

