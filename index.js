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

//Prompt for new Employee
function newEmployee() {
    inquirer.prompt( [
        {   type: "list",
            name: "newemployee",
            message: "Add new Employee to the team?",
            choices:[
                "Add Manager",
                "Add Engineer",
                "Add Intern",
                "Team is all set.",
            ],
        },
    ]).then((answers) => {
        if (answers.newemployee === "Add Manager"){
            newManager();
        }else if (answers.newemployee === "Add Engineer"){
            newEngineer();
        }else if (answers.newemployee === "Add Intern"){
            newIntern();
        }
    })
};

newEngineer();
newIntern();
teamPrompt();

