// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/htmlgen');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

// Class with methods to prompt user for input
class Prompt{
    constructor() {
        this.teamArray = [];
    }

    /**
     * Returns the team array
     */

    getTeamArray() {
        return this.teamArray;
    }

// Questions to prompt user for input
questions() {
    inquirer.prompt(
    {
     type: 'list',
     name: 'employeeType',
     message: "Which type of employee would you like to add to the team?",
     choices: ['Manager', 'Engineer', 'Intern', 'All information added']
    })
    .then(({employeeType}) => {
        if(employeeType === 'Manager'){
        inquirer.prompt([
    {
     type: 'input',
     name: 'name',
     message: "Please enter the manager's name",
     validate: nameInput => {
         if (nameInput) {
             return true;
         } else {
             console.log("We need a name for the manager.");
             return false;
         }
     }
    },
    {
        type: 'number',
        name: 'id',
        message: "Please enter the manager's employee ID number",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter a valid ID number.");
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email",
        validate: emailInput => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter a valid email.");
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "Please enter the manager's office number",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter a valid office number.");
                return false;
            }
        }
    },
    ])

    // Pushes new manager to team array
    .then( (templateData) => {
        const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber)
        this.teamArray.push(newManager);
        // Sends user back to menu
        this.questions();
    });

    } else if (employeeType === 'Engineer') {
            inquirer.prompt([
                    {
                     type: 'input',
                     name: 'name',
                     message: "Please enter the engineer's name",
                     validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("We need a name for the engineer.");
                            return false;
                        }
                    }
                    },
                    {
                     type: 'number',
                     name: 'id',
                     message: "Please enter the engineer's employee ID number",
                     validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log("Please enter a valid ID number.");
                            return false;
                        }
                    } 
                    },
                    {
                     type: 'input',
                     name: 'email',
                     message: "Please enter the engineer's email",
                     validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please enter a valid email.");
                            return false;
                        }
                    }
                    },
                    {
                     type: 'input',
                     name: 'github',
                     message: "Please enter the engineer's GitHub username",
                     validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log("Please enter a valid GitHub username.");
                            return false;
                        }
                    }  
                    }

                // Pushes new engineer to team array
                ]).then( templateData => {
                    const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                    this.teamArray.push(newEngineer);
                    // Sends user back to menu
                    this.questions();
                });

        } else if (employeeType === 'Intern') {
            inquirer.prompt([
                {
                 type: 'input',
                 name: 'name',
                 message: "Please enter the intern's name",
                 validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("We need a name for the intern.");
                        return false;
                    }
                }
                },
                {
                 type: 'number',
                 name: 'id',
                 message: "Please enter the intern's employee ID number",
                 validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter a valid ID number.");
                        return false;
                    }
                } 
                },
                {
                 type: 'input',
                 name: 'email',
                 message: "Please enter the intern's email",
                 validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter a valid email.");
                        return false;
                    }
                }
                },
                {
                 type: 'input',
                 name: 'school',
                 message: "Please enter the intern's school name",
                 validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter a valid school name.");
                        return false;
                    }
                }  
                }

            // Pushes new intern to team array
            ]).then( templateData => {
                const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school);
                this.teamArray.push(newIntern);
                // Sends user back to menu
                this.questions();
            });

        } else if (employeeType === 'All information added') {
            // Generates HTML page
            const pagehtml = generateHTML(this.getTeamArray());
            fs.writeFile('./dist/index.html', pagehtml, err => {
                if (err) throw new Error(err);

                console.log('Your page has been created. Navigate to the dist folder to view index.html and open in a browser.');
            });
        }
    });

}
};

// Creates new prompt object for user to start the application
const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;