const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

// const intern1 = new Intern("Liya", 35, "lam@me.me", "umd");
// const engineer1 = new Engineer("Maki", 33, "mam@me.me", "mmaak");
// const manager1 = new Manager("Helen", 32, "ham@me.me", "3");

// const intern = new Intern();
// const engineer = new Engineer();
// const manager = new Manager();

// console.log(intern1);
// const allEmployees = [];
// infoIntern()

// ask each employee questions

inquirer
.prompt([
    {
        type: 'confirm',
        name: 'role',
        message: 'Are you the manager' , 
        // validate ,
    },
    {
        name: 'name',
        message: 'Please enter your full name.', 
        // validate: ,
    },
    {
        name: 'id',
        message: 'Please enter your id.', 
        // validate ,
    },
    {
        name: 'email',
        message: 'Please enter your email address.', 
        // validate ,
    },
    {
        name: 'school',
        message: 'Please enter your office number.', 
        // validate ,
    },
    {
        type: 'list',
        name: 'role',
        message: 'What role would you like to add?' , 
        choices: ['Intern', 'Engineer'],
        // validate ,
    },
    {
        name: 'name',
        message: 'Please enter employee full name.', 
        // validate: ,
    },
    {
        name: 'id',
        message: 'Please enter employee id.', 
        // validate ,
    },
    {
        name: 'email',
        message: 'Please enter employee email address.', 
        // validate ,
    },
    {
        name: 'school',
        message: 'Please enter employee school name.', 
        // validate ,
    },
    {
        name: 'school',
        message: 'Please enter employee github username.', 
        // validate ,
    },
    // {
    //     name: ,
    //     message , 
    //     validate ,
    // },
])
.then((response) => {
    console.log(response);

    fs.writeFile('index.html', index, (err) => {
        if (err) throw err;
        console.log(index)
    })
})















// const path = require("path");

// const dist_dir = path.resolve(__dirname, "dist");
// const dist_path = path.join(dist_dir, "team.html");
// const render = require("./src/page-template");