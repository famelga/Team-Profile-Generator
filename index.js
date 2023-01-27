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
        type: 'list',
        name: 'role',
        message: 'What is your role?' , 
        choices: ['Intern', 'Engineer', 'Manager'],
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
        message: 'Please enter your school name.', 
        // validate ,
    },
    // {
    //     name: ,
    //     message , 
    //     validate ,
    // },
])















// const path = require("path");

// const dist_dir = path.resolve(__dirname, "dist");
// const dist_path = path.join(dist_dir, "team.html");
// const render = require("./src/page-template");