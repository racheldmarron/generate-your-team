const Manager = require("../lib/manager");

test("Test to see if office number function is working properly", () => {
    const officeNumber = "8675309";
    const employee = new Manager("Rachel", 1, "racheldmarron@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("Test to see if role returns as Manager as expected", () => {
    const role = "Manager";
    const employee = new Manager("Rachel", 1, "racheldmarron@gmail.com", "racheldmarron");
    expect(employee.getRole()).toBe(role);
  });