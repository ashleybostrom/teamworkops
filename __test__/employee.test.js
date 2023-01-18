const Employee = require('../lib/employee');

test('creates an employee object', () => {
    const Employee = new Employee();

    expect(typeof(Employee)).toBe("object");
});

test("get employee's name", () => {
    const Employee = new Employee('Employee1');

    expect(Employee.getName()).toBe('Employee1');
});

test("get employee's id", () => {
    const Employee = new Employee('Employee1', '1');

    expect(Employee.getId()).toBe('1');
});

test("get employee's email", () => {
    const Employee = new Employee('Employee1', '1', 'jasmine@magiccarpet.com');

    expect(Employee.getEmail()).toBe('jasmine@magiccarpet.com');
});

test("getRole() returns employee", () => {
    const Employee = new Employee('Employee');

    expect(Employee.getRole()).toBe('Employee');
});