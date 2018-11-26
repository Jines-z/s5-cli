const inquirer = require('inquirer')
const promptList = [{
    type: 'list',
    message: 'Choose a package management tool: ',
    name: 'command',
    choices: [
        'yarn',
        'npm',
        'cnpm'
    ]
}]

const Inquirer = () => {
    return new Promise((resolve, reject) => {
        inquirer.prompt(promptList).then(answers => {
            resolve(answers)
        })
    })
}

module.exports = Inquirer
