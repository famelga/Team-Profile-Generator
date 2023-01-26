const Employee = require("../lib/Employee");

// describe("Employee class", () => {
    test("Can create an email", () => {
        const e = new Employee();
        expect(typeof (e)).toBe("object");
    })

    test("Can set name via constructor", () => {
        const name = "fayven";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    })

    test("Can set id via constructor", () => {
        const id = 30;
        const e = new Employee(id);
        expect(e.id).toBe(id);
    })

    test("Can set email via constructor", () => {
        const email = "fam@me.com";
        const e = new Employee(email);
        expect(e.email).toBe(email);
    })

    // describe("Can get name via getName", () => {
        test("returns employee's name", () =>{
            const name = new Employee("Fayven");
            expect(name.getName()).toBe("Fayven");
        });
    // });
    // describe("Can get id via getId", () => {
        test("returns employee's id", () =>{
            const id = new Employee("Fayven", 30);
            expect(id.getId()).toBe(30);
        });
    // });
    // describe("Can get email via getEmail", () => {
        test("returns employee's email", () =>{
            const email = new Employee("Fayven", 30, "fam@me.com");
            expect(email.getEmail()).toBe("fam@me.com");
        });
    // });
    // describe("Can get role via getRole", () => {
        test("returns employee's role", () =>{
            const role = new Employee("Fayven", 30, "fam@me.com");
            expect(role.getRole()).toBe("Employee");
        });
    // });
   
// })
