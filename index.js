// Universal constructor and required classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Packages for questions and write file function
const inquirer = require('inquirer');
const fs = require('fs');

// Empty array to store question objects
let createdTeam = [];

// Question for team name

function teamQuestions() {
    inquirer.prompt([
        { type: 'input',
          name: 'teamname',
          message: 'What is the team name?'
        }
    ]).then((answers) => {
        const teamName = answers.teamname;
        newManager();
        createdTeam.push(teamName);
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
        name: "officeNumber",
        message: "What is the office number?",
    },
]).then((answers) => {
    const role = 'Manager'
    const name = answers.name;
    const id = answers.id;
    const email = answers.email;
    const officeNumber = answers.officeNumber;
    const employee = new Manager(name, id, email, officeNumber, role);
    newEmployee();
    createdTeam.push(employee);
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
        }else if (answers.newemployee === "Team is all set."){
            formTeam();
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
        newEmployee();
        createdTeam.push(employee);
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
            message: "Intern's school name?",
        },
    ]).then((answers) => {
        const role = "Intern"
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const school = answers.school;
        const employee = new Intern(name, id, email, school, role);
        newEmployee();
        createdTeam.push(employee);
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
    <link rel="stylesheet" href="./style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    <title>Team Profile Generator</title>
</head>
<body>
    <header class= "header container-fuild"><h1><b>${createdTeam[0]}</b></h1></header>
    <main class="container-fluid">
    <div class="container">
        <div class="row">
            
`
    generateHTML.push(beginHTML);
    for (let i = 1; i < createdTeam.length; i++) {
        
        let employeeInfo = `
        <div class="col-12 col-md-4">
        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header"><br> ${createdTeam[i].role} </br></div>
        <div class="card-body">
        <h5 class="card-title"> ${createdTeam[i].name} </h5>
        <ul class="list-group">
            <li class="list-group-item">ID: ${createdTeam[i].id} </li>
            <li class="list-group-item">Email: <a href="mailto:${createdTeam[i].email}">${createdTeam[i].email}</a></li>
`
        if (createdTeam[i].officeNumber){
            employeeInfo += `
            <li class="list-group-item">Office Number: <br>${createdTeam[i].officeNumber} </li>
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
            </div>
            `            
            generateHTML.push(employeeInfo);
    }

    const endHTML =
    ` </div>
      </div>
    </main>
    </body>
    </html>
    `
    generateHTML.push(endHTML);


// Write to File function to make HTML page
fs.writeFile(`./dist/index.html`, generateHTML.join(""), (error) => {
    if (error) throw error;
    console.log('Team Profile has been written.');
});

}
teamQuestions();

