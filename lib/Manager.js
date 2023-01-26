const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expect parameter 'name' to be a non-empty string");
        }
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expect parameter 'id' to be a non-negative number");
          }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expect parameter 'email' to be a non-empty string");
        }
        if (typeof officeNumber !== "number" || isNaN(officeNumber) || id < 0) {
            throw new Error("Expect parameter 'office number' to be a non-negative number");
          }

    super(name, id, email);
    this.officeNumber = officeNumber;
    }
    
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;