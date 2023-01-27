const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");


// const intern = new Intern();
// const engineer = new Engineer();


const allEmployees = [];
// console.log(allEmployees);

function managerCard() {
inquirer
.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?', 
        choices: ['Manager'],
    },
    {
        name: 'name',
        message: 'Please enter your full name.', 
    },
    {
        type: 'number',
        name: 'id',
        message: 'Please enter your id.', 
    },
    {
        name: 'email',
        message: 'Please enter your email address.', 
    },
    {
        type: 'number',
        name: 'office',
        message: 'Please enter your office number.', 
    },
])
.then((response) => {
    allEmployees.push(response);

    // const manager = new Manager(response.name, response.id, response.email, response.office);
    // console.log(manager);
    employeeCard();
});
};

function employeeCard(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What role would you like to add?', 
            choices: ['Intern', 'Engineer'],
        },
        {
            name: 'name',
            message: 'Please enter employee full name.', 
        },
        {
            type: 'number',
            name: 'id',
            message: 'Please enter employee id.', 
        },
        {
            name: 'email',
            message: 'Please enter employee email address.', 
        },
        {
            name: 'school',
            message: 'Please enter employee school name.', 
            when: (response) => response.role === "Intern",
        },
        {
            name: 'github',
            message: 'Please enter employee github username.', 
            when: (response) => response.role === "Engineer",
        },
        {
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add another employee?', 
        },

    ])
    .then((response) => {

            allEmployees.push(response);

        if(response.add === true) {
            employeeCard();
        };

        myTeam();

        // const engineer = new Engineer(response.role, response.name, response.id, response.email, response.office);
        // const intern = new Intern(response.role, response.name, response.id, response.email, response.office);

        console.log(allEmployees);

    });
    };

    managerCard();


function myTeam() {

var index = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
        </head>
        
        <body>
            <header class="column has-background-primary p-4 has-text-centered">My Team</header>
            <main class="container">
                <div class="card">
                    <div class="card-header">
                    <div class="card-header-title is-center ">${allEmployees[0].name}</div>
                    <div class="card-header-title is-center">${allEmployees[0].role}</div>
                </div>
                    <div class="card-content" id="id">${allEmployees[0].id}</div>
                    <div class="card-content" id="email">${allEmployees[0].email}</div>
                    <div class="card-content" id="office-number">${allEmployees[0].office}</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                    <div class="card-header-title is-center "></div>
                    <div class="card-header-title is-center"></div>
                </div>
                    <div class="card-content" id="id"></div>
                    <div class="card-content" id="email"></div>
                    <div class="card-content" id="github"></div>
                    <div class="card-content"></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                    <div class="card-header-title is-center "></div>
                    <div class="card-header-title is-center"></div>
                </div>
                    <div class="card-content" id="id"></div>
                    <div class="card-content" id="email"></div>
                    <div class="card-content" id="school"></div>
                    <div class="card-content"></div>
                    </div>
                </div>
            </main>
        </body>
        
        </html>`
    
        fs.writeFile('index.html', index, (err) => {
            if (err) throw err;
            console.log(index)
        })
    
}













// // // const path = require("path");

// const dist_dir = path.resolve(__dirname, "dist");
// const dist_path = path.join(dist_dir, "team.html");
// const render = require("./src/page-template");