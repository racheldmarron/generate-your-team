const Intern = require("../lib/intern");

test("Test to see if university attended function is working properly", () => {
    const school = "Chapman University";
    const employee = new Intern("Rachel", 1, "racheldmarron@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("Test to see if role returns intern as expected", () => {
    const role = "Intern";
    const employee = new Intern("Rachel", 1, "racheldmarron@gmail.com", "racheldmarron");
    expect(employee.getRole()).toBe(role);
  });