const Employee = require("../lib/Employee");

describe("Employee class", () => {

    describe("constructor", () => {
    it("Can create an email", () => {
        const testEmployee = new Employee("Fayven", 30, "fam@me.me");
        expect(testEmployee.name).toEqual("Fayven");
        expect(testEmployee.id).toEqual(30);
        expect(testEmployee.email).toEqual("fam@me.me");
    })

    // it("Can set name via constructor", () => {
    //     const name = "fayven";
    //     const e = new Employee(name);
    //     expect(e.name).toBe(name);
    // })

    // it("Can set id via constructor", () => {
    //     const id = 30;
    //     const e = new Employee(id);
    //     expect(e.name).toBe(id);
    // })

    // it("Can set email via constructor", () => {
    //     const email = "fam@me.com";
    //     const e = new Employee(email);
    //     expect(e.email).toBe(email);
    // })

    describe("Can get name via getName", () => {
        it("returns employee's name", () =>{
            const testEmployee = new Employee("Fayven");
            expect(testEmployee.getName()).toBe("Fayven");
        });
    });
    describe("Can get id via getId", () => {
        it("returns employee's id", () =>{
            const testEmployee = new Employee("Fayven", 30);
            expect(testEmployee.getId()).toBe(30);
        });
    });
    describe("Can get email via getEmail", () => {
        it("returns employee's email", () =>{
            const testEmployee = new Employee("Fayven", 30, "fam@me.com");
            expect(testEmployee.getEmail()).toBe("fam@me.com");
        });
    });
    describe("Can get role via getRole", () => {
        it("returns employee's role", () =>{
            const testEmployee = new Employee("Fayven", 30, "fam@me.com");
            expect(testEmployee.getRole()).toBe("Employee");
        });
    });
});
   
});
