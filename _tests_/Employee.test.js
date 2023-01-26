const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("initialization", () => {
    it("should create an object if provided valid arguments", () => {
      const testEmployee = new Employee("Fayven", 30, "fam@me.me");
      expect(testEmployee.name).toEqual("Fayven");
      expect(testEmployee.id).toEqual(30);
      expect(testEmployee.email).toEqual("fam@me.me");
    });


  });
  describe("Can identify name error", () => {

      it("should throw an error if 'name' is not a string", () => {
          const cb = () => new Employee(2023, 30, "fam@me.me");
          const err = new Error("Expect parameter 'name' to be a non-empty string");
          
          expect(cb).toThrowError(err);
        })

  });

describe("Can identify id error", () => {
    it("should throw an error if 'id' is not a number", () => {
        const cb = () => new Employee("Fayven", "30", "fam@me.me");
        const err = new Error("Expect parameter 'id' to be a non-negative number");
        
        expect(cb).toThrowError(err);
      })
})

describe("Can identify email error", () => {
    it("should throw an error if 'email' is not a string", () => {
        const cb = () => new Employee("Fayven", 30, 2023);
        const err = new Error(
          "Expect parameter 'email' to be a non-empty string"
        );
  
        expect(cb).toThrowError(err);
      });
})

  describe("Can get name via getName", () => {
    
    it("returns employee's name", () => {
      const testEmployee = new Employee("Fayven", 30, "fam@me.me");
      expect(testEmployee.getName()).toBe("Fayven");
    });
  });
  
  describe("Can get id via getId", () => {
    it("returns employee's id", () => {
      const testEmployee = new Employee("Fayven", 30, "fam@me.me");
      expect(testEmployee.getId()).toBe(30);
    });
  });
  describe("Can get email via getEmail", () => {

    it("returns employee's email", () => {
      const testEmployee = new Employee("Fayven", 30, "fam@me.com");
      expect(testEmployee.getEmail()).toBe("fam@me.com");
    });
  });
  describe("Can get role via getRole", () => {
    it("returns employee's role", () => {
      const testEmployee = new Employee("Fayven", 30, "fam@me.com");
      expect(testEmployee.getRole()).toBe("Employee");
    });
  });
});
