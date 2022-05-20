const Engineer = require('../lib/Engineer');

test('Can get github username with getGithub method on engineer object', () => {
    const github = 'Octocat';
    const engineer = new Engineer('name', 'id', 'email', 'Octocat')
    expect(engineer.getGithub()).toBe(github);
})
