const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const dist_dir = path.resolve(__dirname, "dist");
const dist_path = path.join(dist_dir, "team.html");
const render = require("./src/page-template");