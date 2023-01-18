const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

test('creates an intern object', () => {
    const intern = new Intern('Intern1');

    expect(typeof(Intern)).toBe('object');
});

test("get intern's school", () => {
    const intern = new Intern('intern1', '2', 'email', 'school1');

    expect(intern.school).toBe('school1');
});

test('getRole() returns intern', () => {
    const intern = new Intern('intern');

    expect(Intern.getRole()).toBe('intern');
});