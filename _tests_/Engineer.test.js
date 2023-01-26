const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  describe("initialization", () => {
    it("should create an object if provided valid arguments", () => {
      const testEngineer = new Engineer("Fayven", 30, "fam@me.me", "famelga");
      expect(testEngineer.name).toEqual("Fayven");
      expect(testEngineer.id).toEqual(30);
      expect(testEngineer.email).toEqual("fam@me.me");
      expect(testEngineer.github).toEqual("famelga");
    });


  });
  describe("Can identify name error", () => {

      it("should throw an error if 'name' is not a string", () => {
          const cb = () => new Engineer(2023, 30, "fam@me.me");
          const err = new Error("Expect parameter 'name' to be a non-empty string");
          
          expect(cb).toThrowError(err);
        })

  });

describe("Can identify id error", () => {
    it("should throw an error if 'id' is not a number", () => {
        const cb = () => new Engineer("Fayven", "30", "fam@me.me");
        const err = new Error("Expect parameter 'id' to be a non-negative number");
        
        expect(cb).toThrowError(err);
      })
})

describe("Can identify email error", () => {
    it("should throw an error if 'email' is not a string", () => {
        const cb = () => new Engineer("Fayven", 30, 2023);
        const err = new Error(
          "Expect parameter 'email' to be a non-empty string"
        );
  
        expect(cb).toThrowError(err);
      });
})

describe("Can identify github error", () => {
    it("should throw an error if 'github' is not a string", () => {
        const cb = () => new Engineer("Fayven", 30, "fam@me.me", 2023);
        const err = new Error(
          "Expect parameter 'github' to be a non-empty string"
        );
  
        expect(cb).toThrowError(err);
      });
})

  describe("Can get name via getName", () => {
    
    it("returns Engineer's name", () => {
      const testEngineer = new Engineer("Fayven", 30, "fam@me.me", "famelga");
      expect(testEngineer.getName()).toBe("Fayven");
    });
  });
  
  describe("Can get id via getId", () => {
    it("returns Engineer's id", () => {
      const testEngineer = new Engineer("Fayven", 30, "fam@me.me", "famelga");
      expect(testEngineer.getId()).toBe(30);
    });
  });
  describe("Can get email via getEmail", () => {

    it("returns Engineer's email", () => {
      const testEngineer = new Engineer("Fayven", 30, "fam@me.com", "famelga");
      expect(testEngineer.getEmail()).toBe("fam@me.com");
    });
  });
  describe("Can get github via getGithub", () => {
            it("returns engineer's github", () => {
                const testEngineer = new Engineer("Fayven", 30, "fam@me.me", "famelga");
                expect(testEngineer.getGithub()).toBe("famelga");
            });
        });
    
        describe("Can get role via getRole", () => {
            it("returns engineer's role", () => {
                const testEngineer= new Engineer("Fayven", 30, "fam@me.me", "famelga");
                expect(testEngineer.getRole()).toBe("Engineer");
            });
  });
});


// const Engineer = require("../lib/Engineer");

// describe("Engineer class extends Employee", () => {

//     describe("constructor", () => {
//         // it("should throw an error if 'name' is not a string", () => {
//         //     const cb = () => new Engineer(2023, 30, "fam@me.me", "famelga");
//         //     const err = new Error("Expected parameter 'name' to be a non-empty string");
      
//         //     expect(cb).toThrowError(err);
//         //   });
          
//         // it("can set a github username", () => {
//         //     const testEngineer = new Engineer("Fayven", 30, "fam@me.me", "famelga");
//         //      expect(testEngineer.github).toEqual("famelga");
//         // })
//     })

//     describe("Can get github via getGithub", () => {
//         it("returns engineer's github", () => {
//             const testEngineer = new Engineer("Fayven", 30, "fam@me.me", "famelga");
//             expect(testEngineer.getGithub()).toBe("famelga");
//         });
//     });

//     describe("Can get role via getRole", () => {
//         it("returns engineer's role", () => {
//             const testEngineer= new Engineer("Fayven", 30, "fam@me.me", "famelga");
//             expect(testEngineer.getRole()).toBe("Engineer");
//         });
//     });
// });