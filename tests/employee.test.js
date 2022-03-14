const Employee = require("../lib/employee");

test("Test to see if name function is working properly", () => {
    const name = "Rachel Marron";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("Test to see if id function is working properly", () => {
    const id = "1";
    const employee = new Employee("Rachel Marron", id, "racheldmarron@gmail.com");
    expect(employee.id).toBe(id);
  });

test("Test to see if email function is working properly", () => {
    const email = "racheldmarron@gmail.com";
    const employee = new Employee("Rachel Marron", 1, email);
    expect(employee.getEmail()).toBe(email);
  });

test("Test to see if role function is working properly", () => {
    const role = "Employee";
    const employee = new Employee("Rachel Marron", 1, "racheldmarron@gmail.com");
    expect(employee.getRole()).toBe(role);
  });