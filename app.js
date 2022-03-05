const inquirer = require('inquirer');
const manager = require('.lib/manager'); 
const engineer = require('.lib/engineer'); 
const intern = require('.lib/intern');
const generateSite = require('./lib/generate-site');
const fs = require("fs"); s
const path = require("path"); 
const employee = require('./lib/employee');
const { prompt } = require('inquirer');
const OUTPUT_DIR = path.resolve(_dirname, "output"); 
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = []; 

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your name.');
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?', 
            validate: id => {
                if (id) {
                    return true;
                }
                else {
                    console.log('Please enter your employee ID.');
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?', 
            validate: employee => {
                if (employee) {
                    return true;
                }
                else {
                    console.log('Please enter your email address.');
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'phone',
            message: 'What is your office number?', 
            validate: phone => {
                if (phone) {
                    return true;
                }
                else {
                    console.log('Please enter your office phone number.');
                    return false; 
                }
            }
        },
    ]).then(answers => {
        console.log(answers); 
        const manager = new manager(answers.name, answers.id, answers.email, answers.phone); 
        teamMembers.push(manager);
        promptMenu();
    })
}; 

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu', 
            message: 'Please select which option you would like to continue with:', 
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break; 
                case "add an intern":
                    promptIntern(); 
                    break; 
                default: 
                    buildTeam(); 
            }
        }); 
}; 

const promptEngineer = () => {
    console.log('Add An Engineer'); 

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your engineer?', 
            validate: engineerName => {
                if (engineerName) {
                    return true;
                }
                else {
                    console.log('Please enter your engineers name.');
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'What is your engineers ID?', 
            validate: engineerId => {
                if (engineerId) {
                    return true;
                }
                else {
                    console.log('Please enter your engineers employee ID.');
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'What is your engineers email address?', 
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                }
                else {
                    console.log('Please enter your engineers email address.');
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'github',
            message: 'What is your engineers Github username?', 
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                }
                else {
                    console.log('Please enter your engineers Github username.');
                    return false; 
                }
            }
        }
    ]).then(answers => {
        console.log(answers); 
        const engineer = new engineer(answers.name, answers.id, answers.email, answers.github); 
        teamMembers = push(engineer); 
        promptMenu(); 

    })
}; 

const promptIntern = () => {
    console.log('Add An Intern'); 

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your intern?', 
            validate: internName => {
                if (internName) {
                    return true;
                }
                else {
                    console.log('Please enter your interns name.');
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'What is your interns ID?', 
            validate: internId => {
                if (internId) {
                    return true;
                }
                else {
                    console.log('Please enter your interns employee ID.');
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'What is your interns email address?', 
            validate: internEmail => {
                if (internEmail) {
                    return true;
                }
                else {
                    console.log('Please enter your interns email address.');
                    return false; 
                }
            }
        }, 
        {
            type: 'input',
            name: 'school',
            message: 'What school does your intern attend?', 
            validate: internSchool => {
                if (internSchool) {
                    return true;
                }
                else {
                    console.log('Please enter the school your intern attends');
                    return false; 
                }
            }
        }
    ]).then(answers => {
        console.log(answers); 
        const intern = new intern(answers.name, answers.id, answers.email, answers.school); 
        teamMembers = push(intern); 
        promptMenu(); 
    })
}; 

const buildTeam = () => {
    console.log('Finish building my team!'); 

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8"); 
}

promptManager(); 

