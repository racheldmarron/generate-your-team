const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");


const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const renderHTML = require("./lib/generate-site");


let employeesArr = [];


const questions = [           
    {
        type: "input",
        name: "name",
        message: "What is the name of your employee?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the ID of your employee?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email of your employee?"
    },
    {
        type: "list",
        name: "role",
        message: "What is your employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    }
    ]


    managerQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?",
            validate: officeNumber => {
                if (officeNumber) {
                  return true;
                } else {
                  console.log("Please enter the office number for your manager!");
                  return false;
                }
              }
        }
    ]

    // Questions for engineer role
    engineerQuestions = [
        {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub username?",
            validate: github => {
                if (github) {
                  return true;
                } else {
                  console.log("Please enter the GitHub username of your engineer!!");
                  return false;
                }
              }
        }
    ]


    internQuestions = [

        {
            type: "input",
            name: "school",
            message: "What university does your intern attend?",
            validate: school => {
                if (school) {
                  return true;
                } else {
                  console.log("Please enter the university your intern attends!");
                  return false;
                }
              }
        }
    ]


    const init = () => {
        if (fs.existsSync(filePath)) {
            inquirer.prompt({
                type: "confirm",
                message: "There is an index.html already created. Do you want to overwrite it?",
                name: "overwrite"
            }).then(async (response) => {
    
                let overwrite = response.overwrite;
                if (await overwrite === true) {
                    console.log("Please enter the information to start building your team!")
                    newEmployee()
                } else if (await overwrite === false) {
                    console.log("Okay. The current index.html file will not be overwritten.")
                }
            })
        } else {
            console.log("Welcome to your team profile generator. Please enter your team information below to start building your team:")
            newEmployee()
        }
    };   


    const newEmployee = async () => {
        await inquirer.prompt(questions)
          .then((response) => {
            let name = response.name;
            let id = response.id;
            let email = response.email;
            let role = response.role;
            let officeNumber;
            let github;
            let school;

            if (role === "Manager") {
                inquirer.prompt(managerQuestions).then((response) =>{
                        officeNumber = response.officeNumber;
                        let employee = new Manager(name, id, email, officeNumber);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                    });
                }

            else if (role === "Engineer") {
            inquirer.prompt(engineerQuestions).then((response) =>{
                github = response.github;
                let employee = new Engineer(name, id, email, github);
                employeesArr.push(employee);
                addEmployee(employeesArr);
                });
            }

            else if (role === "Intern") {
                inquirer.prompt(internQuestions).then((response) =>{
                        school = response.school;
                        let employee = new Intern(name, id, email, school);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                    });
            }

        });    
    
    };

    const addEmployee = async (array) => {
       await inquirer
        .prompt({
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee?"

        }).then(async (response) => {
            var createEmployee = response.addEmployee;
            if (await createEmployee === true) {
                newEmployee();
            } 
            else if (await createEmployee === false) {
       
            if (!fs.existsSync(fileDirectory)) {
                fs.mkdirSync(fileDirectory)
            }

            
            fs.writeFile(filePath, renderHTML(array), (err) => {
        
                if (err) {
                    return console.log(err);
                }
                
                console.log("Your employee index.html page has been created successfully!");
            });

        }
    })
};

    init();

