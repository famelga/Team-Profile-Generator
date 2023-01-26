const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, OfficeNumber) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expect parameter 'name' to be a non-empty string");
        }
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expect parameter 'id' to be a non-negative number");
          }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expect parameter 'email' to be a non-empty string");
        }
        if (typeof OfficeNumber !== "number" || isNaN(OfficeNumber) || id < 0) {
            throw new Error("Expect parameter 'office number' to be a non-negative number");
          }

    super(name, id, email);
    this.OfficeNumber = OfficeNumber;
    }
    
    getOfficeNumber() {
        return this.OfficeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;