const Intern = require("../lib/Intern");

describe("Intern class", () => {
  describe("initialization", () => {
    it("should create an object if provided valid arguments", () => {
      const testIntern = new Intern("Fayven", 30, "fam@me.me", "famelga");
      expect(testIntern.name).toEqual("Fayven");
      expect(testIntern.id).toEqual(30);
      expect(testIntern.email).toEqual("fam@me.me");
      expect(testIntern.github).toEqual("famelga");
    });


  });
  describe("Can identify name error", () => {

      it("should throw an error if 'name' is not a string", () => {
          const cb = () => new Intern(2023, 30, "fam@me.me");
          const err = new Error("Expect parameter 'name' to be a non-empty string");
          
          expect(cb).toThrowError(err);
        })

  });

describe("Can identify id error", () => {
    it("should throw an error if 'id' is not a number", () => {
        const cb = () => new Intern("Fayven", "30", "fam@me.me");
        const err = new Error("Expect parameter 'id' to be a non-negative number");
        
        expect(cb).toThrowError(err);
      })
})

describe("Can identify email error", () => {
    it("should throw an error if 'email' is not a string", () => {
        const cb = () => new Intern("Fayven", 30, 2023);
        const err = new Error(
          "Expect parameter 'email' to be a non-empty string"
        );
  
        expect(cb).toThrowError(err);
      });
})

describe("Can identify github error", () => {
    it("should throw an error if 'github' is not a string", () => {
        const cb = () => new Intern("Fayven", 30, "fam@me.me", 2023);
        const err = new Error(
          "Expect parameter 'github' to be a non-empty string"
        );
  
        expect(cb).toThrowError(err);
      });
})

  describe("Can get name via getName", () => {
    
    it("returns Intern's name", () => {
      const testIntern = new Intern("Fayven", 30, "fam@me.me", "famelga");
      expect(testIntern.getName()).toBe("Fayven");
    });
  });
  
  describe("Can get id via getId", () => {
    it("returns Intern's id", () => {
      const testIntern = new Intern("Fayven", 30, "fam@me.me", "famelga");
      expect(testIntern.getId()).toBe(30);
    });
  });
  describe("Can get email via getEmail", () => {

    it("returns Intern's email", () => {
      const testIntern = new Intern("Fayven", 30, "fam@me.com", "famelga");
      expect(testIntern.getEmail()).toBe("fam@me.com");
    });
  });
  describe("Can get github via getGithub", () => {
            it("returns Intern's github", () => {
                const testIntern = new Intern("Fayven", 30, "fam@me.me", "famelga");
                expect(testIntern.getGithub()).toBe("famelga");
            });
        });
    
        describe("Can get role via getRole", () => {
            it("returns Intern's role", () => {
                const testIntern= new Intern("Fayven", 30, "fam@me.me", "famelga");
                expect(testIntern.getRole()).toBe("Intern");
            });
  });
});

