const Intern = require('../lib/Intern');

test('Can get school from getSchool method on intern object', () => {
    const school = 'ASU';
    const intern = new Intern('name', 'id', 'email', 'ASU')
    expect(intern.getSchool()).toBe(school);
})

