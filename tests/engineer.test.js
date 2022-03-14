const Engineer = require("../lib/engineer");

test("Test to see if github username is functioning properly", () => {
    const github = "racheldmarron";
    const employee = new Engineer("Rachel", 1, "racheldmarron@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("Test to see if role returns as Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer("Rachel", 1, "racheldmarron@gmail.com", "racheldmarron");
    expect(employee.getRole()).toBe(role);
  });