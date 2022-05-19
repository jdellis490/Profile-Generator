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
// Questions prompt for adding new Engineer
function newEngineer() {
    inquirer.prompt([
        {   type: "input",
            name: "name",
            message: "Name of Engineer?",
        },
        {   type: "input",
            name: "id",
            message: "What is Engineer's ID?",
        },
        {   type: "input",
            name: "email",
            message: "What is the Engineer's email address?",
        },
        {   type: "input",
            name: "github",
            message: "Engineer's GitHub username?",
        },
    ]).then((answers) => {
        const role = "Engineer"
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const github = answers.github;
        const employee = new Engineer(name, id, email, github, role);
    })
};
// Questions prompt for adding new Intern
function newIntern() {
    inquirer.prompt([
        {   type: "input",
            name: "name",
            message: "Name of Intern?",
        },
        {   type: "input",
            name: "id",
            message: "What is the Intern's ID?",
        },
        {   type: "input",
            name: "email",
            message: "What is the Intern's email address?",
        },
        {   type: "input",
            name: "school",
            message: "Intern's school name?,"
        },
    ]).then((answers) => {
        const role = "Intern"
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const school = answers.school;
        const employee = new Intern(name, id, email, school, role);
    })
};

// Generating HTML for employees on team
function formTeam() {
    const generateHTML = []
    const beginHTML =

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../dist/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    <title>Team Profile Generator</title>
</head>
<body>
    <header class= "header"><b>${createdTeam[0]}</b></header>
`
    generateHTML.push(beginHTML);
    for (let i = 1; i < createdTeam.length; i++) {
        
        let employeeInfo = `
        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header"><br> ${createdTeam[i].role} </br></div>
        <div class="card-body">
        <h5 class="card-title"> ${createdTeam[i].name} </h5>
        <ul class="list-group">
            <li class="list-group-item">ID: ${createdTeam[i].id} </li>
            <li class="list-group-item">Email: <a href="mailto:${createdTeam[i].email}">${createdTeam[i].email}</a></li>
`
        if (createdTeam[i].officenumber){
            employeeInfo += `
            <li class="list-group-item">Office Number: ${createdTeam[i].officenumber} </li>
        </ul>`
        } else if (createdTeam[i].github) {
            employeeInfo += `
            <li class="list-group-item">GitHub: <a href="https://github.com/${createdTeam[i].github}">${createdTeam[i].github}</a></li>
        </ul>`
        } else if (createdTeam[i].school){
            employeeInfo += `
            <li class="list-group-item">School Name: ${createdTeam[i].school} </li>
        </ul>`
        } employeeInfo += `
            </div>
            </div>
            `
        generateHTML.push(employeeInfo);
    }
`
</body>
</html>`

// Write to File function to make HTML page
fs.writeFile(`.dist/team.html`, generateHTML.join(""), (error) => {
    if (error) throw error;
    console.log('HTML has been written.');
});

}
teamPrompt();

