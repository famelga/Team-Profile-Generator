const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        if (typeof name !== "string" || !name.trim().length) {
            // throw new Error("Expect parameter 'name' to be a non-empty string");
        }
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            // throw new Error("Expect parameter 'id' to be a non-negative number");
          }
        if (typeof email !== "string" || !email.trim().length) {
            // throw new Error("Expect parameter 'email' to be a non-empty string");
        }
        if (typeof github !== "string" || !github.trim().length) {
            // throw new Error("Expect parameter 'github' to be a non-empty string");
        }

    super(name, id, email);
    this.github = github;
    }
    
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
