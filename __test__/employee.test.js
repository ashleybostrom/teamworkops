const Employee = require('../lib/employee');

test('creates an employee object', () => {
    const employee = new Employee('Employee', '', '', 'Employee');

    expect(typeof(employee)).toBe("object");
});

test("get employee's name", () => {
    const employee = new Employee('Employee1');

    expect(employee.getName()).toBe('Employee1');
});

test("get employee's id", () => {
    const employee = new Employee('Employee1', '1');

    expect(employee.getId()).toBe('1');
});

test("get employee's email", () => {
    const employee = new Employee('Employee1', '1', 'jasmine@magiccarpet.com');

    expect(employee.getEmail()).toBe('jasmine@magiccarpet.com');
});

test("getRole() returns employee", () => {
    const employee = new Employee('Employee', '', '', 'Employee');

    expect(employee.getRole()).toBe('Employee');
});