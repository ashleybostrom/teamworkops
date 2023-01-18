const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates a manager object', () => {
    const manager = new Manager('Manager1');

    expect(typeof(manager)).toBe('object');
});

test('get office number', () => {
    const manager = new Manager('Manager', '1', 'jasmine@magiccarpet.com', '42');

    expect(manager.getOfficeNumber()).toBe('42');
});

test('getRole() returns Manager', () => {
    const manager = new Manager('Manager');

    expect(manager.getRole()).toBe('Manager');
});