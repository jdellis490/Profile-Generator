const { expect } = require('expect');
const { test } = require('picomatch');
const Employee = require('../lib/Employee');

test('Can create new Employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})

test('Can set name to employee object', () => {
    const employeeName = "Justin";
    const employee = new Employee("Justin")
})
test("Can get name with getName method on employee object", () => {
    const employeeName = 'Justin';
    const employee = new Employee("Justin")
    expect(employee.getName()).toBe(employeeName);
})