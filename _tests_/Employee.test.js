const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it()

    describe("getName", () => {
        it("asks for the employee's name", () =>{
            expect(new Employee("Fayven")).toBe(true);
        });
        it("Names less than 2 characters are not accepted", () => {
            expect(new Employee("F")).toBe(false);
        }) 
    });
   
})