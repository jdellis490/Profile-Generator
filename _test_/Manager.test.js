const Manager = require('../lib/Manager');

test('Can create new Manager object', () => {
    const manager = new Manager('Alex');
    expect(typeof(manager)).toBe('object');
})

test('Can get role with getRole method on manager object', () => {
    const employeeRole = 'Manager';
    const manager = new Manager('Manager')
    expect(manager.getRole()).toBe(employeeRole);
})
test('Can get office number with getOfficeNumber method on manager object', () => {
    const officeNumber = 4803015000;
    const manager = new Manager('name', 'id', 'email', 4803015000);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
})

