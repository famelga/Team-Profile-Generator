const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const template = require("./src/page-template");


// const intern = new Intern();
// const engineer = new Engineer();

var cards = "";
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
    allEmployees.push(new Manager (response.name, response.id, response.email, response.office));

    // const manager = new Manager (response.name, response.id, response.email, response.office);
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
        if(response.role === "Engineer") {
            allEmployees.push(new Engineer(response.role, response.name, response.id, response.email, response.office));

        }
        if(response.role === "Intern") {
            allEmployees.push(new Intern(response.role, response.name, response.id, response.email, response.office));

        }

        if(response.add === true) {
            employeeCard();
        } else {
            getCards();
            myTeam();
        }
        


        console.log(allEmployees);

    });
};


  
    managerCard();

    function getCards() {
    cards = allEmployees.reduce((acc, employee) => { 
    //    var card = generateTeammate(employee);
    //     return acc.concat(card);
    return acc += generateTeammate(employee)
    }, ``);
    }


function generateTeammate(employee) {
    var div = "";
    if(employee.getRole() === "Manager"){
        div = `<div class="card-content" id="office-number">${employee.office}</div>`
    }
    if(employee.getRole() === "Engineer"){
        div = `<div class="card-content" id="github"><a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></div>`
    }
    if(employee.getRole() === "Intern"){
        div = `<div class="card-content" id="school">${employee.school}</div>`
    }


    return `              <div class="card">
    <div class="card-header">
    <div class="card-header-title is-center ">${employee.name}</div>
    <div class="card-header-title is-center">${employee.getRole()}</div>
</div>
    <div class="card-content" id="id">${employee.id}</div>
    <div class="card-content" id="email"><a href="mailto:${employee.email}">${employee.email}</div>    
    ${div}    
    </div>
</div>`
};

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
               ${cards}
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