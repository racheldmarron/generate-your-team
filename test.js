const Employee = require('..lib/employee');
const employee = new Employee('rachel', '1234567', 'racheldmarron@gmail.com'); 

test('test if we can get the constructor values for theh employee object', () => {
    expect(employee.name).toBe('rachel');
    expect(employee.id).toBe('1234567');
    expect(employee.email).toBe('racheldmarron@gmail.com'); 
}); 

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('rachel');
}); 

test('test if we can get the name from the getId() method', () => {
    expect(employee.Id()).toBe('1234567');
}); 

test('test if we can get the name from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('racheldmarron@gmail.com');
}); 
test('test if we can get the name from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
}); 