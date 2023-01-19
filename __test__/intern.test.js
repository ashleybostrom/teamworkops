const Intern = require('../lib/intern');
const Employee = require('../lib/employee');

test('creates an intern object', () => {
    const intern = new Intern('Intern1');

    expect(typeof(intern)).toBe('object');
});

test("get intern's school", () => {
    const intern = new Intern('Intern1', '2', 'email', 'school1');

    expect(intern.school).toBe('school1');
});

test('getRole() returns intern', () => {
    const intern = new Intern('Intern');

    expect(intern.getRole()).toBe('Intern');
});