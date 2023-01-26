const Manager = require("../lib/Manager");

describe("Manager class", () => {
  describe("initialization", () => {
    it("should create an object if provided valid arguments", () => {
      const testManager = new Manager("Fayven", 30, "fam@me.com", 1);
      expect(testManager.name).toEqual("Fayven");
      expect(testManager.id).toEqual(30);
      expect(testManager.email).toEqual("fam@me.com");
      expect(testManager.officeNumber).toEqual(1);
    });


  });
  describe("Can identify name error", () => {

      it("should throw an error if 'name' is not a string", () => {
          const cb = () => new Manager(2023, 30, "fam@me.com", 1);
          const err = new Error("Expect parameter 'name' to be a non-empty string");
          
          expect(cb).toThrowError(err);
        })

  });

describe("Can identify id error", () => {
    it("should throw an error if 'id' is not a number", () => {
        const cb = () => new Manager("Fayven", "30", "fam@me.com", 1);
        const err = new Error("Expect parameter 'id' to be a non-negative number");
        
        expect(cb).toThrowError(err);
      })
})

describe("Can identify email error", () => {
    it("should throw an error if 'email' is not a string", () => {
        const cb = () => new Manager("Fayven", 30, 2023, 1);
        const err = new Error(
          "Expect parameter 'email' to be a non-empty string"
        );
  
        expect(cb).toThrowError(err);
      });
})

describe("Can identify office number error", () => {
    it("should throw an error if 'office number' is not a string", () => {
        const cb = () => new Manager("Fayven", 30, "fam@me.com", "1");
        const err = new Error(
          "Expect parameter 'office number' to be a non-empty string"
        );
  
        expect(cb).toThrowError(err);
      });
})

  describe("Can get name via getName", () => {
    
    it("returns Manager's name", () => {
      const testManager = new Manager("Fayven", 30, "fam@me.com", 1);
      expect(testManager.getName()).toBe("Fayven");
    });
  });
  
  describe("Can get id via getId", () => {
    it("returns Manager's id", () => {
      const testManager = new Manager("Fayven", 30, "fam@me.com", 1);
      expect(testManager.getId()).toBe(30);
    });
  });
  describe("Can get email via getEmail", () => {

    it("returns Manager's email", () => {
      const testManager = new Manager("Fayven", 30, "fam@me.com", 1);
      expect(testManager.getEmail()).toBe("fam@me.com");
    });
  });
//   describe("Can get school via getSchool", () => {
//             it("returns Manager's school", () => {
//                 const testManager = new Manager("Fayven", 30, "fam@me.com", "1" "umd");
//                 expect(testManager.getSchool()).toBe("umd");
//             });
//         });
    
        describe("Can get role via getRole", () => {
            it("returns Manager's role", () => {
                const testManager= new Manager("Fayven", 30, "fam@me.com", "1" "umd");
                expect(testManager.getRole()).toBe("Manager");
            });
  });
});

