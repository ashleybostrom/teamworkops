const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');
const { test } = require('@jest/globals');

test('creates an engineer object', () => {
    const engineer = new Engineer('engineer1');

    expect(typeof(engineer)).toBe('object');
});

test('get github username', () => {
    const engineer = new Engineer('manager', '1', 'rosemary@thymeflies.com', 'rosemarygithub');

    expect(engineer.github).toBe('rosemarygithub');
});

test('getRole() returns Engineer', () => {
    const engineer = new Engineer('manager1');

    expect(engineer.getRole()).toBe('Engineer');
});