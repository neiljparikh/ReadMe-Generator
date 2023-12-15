const inquirer = require('inquirer'); 
const fs = require('fs');

// Array of questions for user input
inquirer.prompt([ 
    {
        type: 'input',
        name: 'title',
        message: "What is the name of your project?"
    },
    {   
        type: 'input',
        name: 'description',
        message: "Provide a description of your project:"
    }
])
.then(answers => {
    let answersData = answers;
    answersData = `
    # ${answers.title}
    
    ## Description
    ${answers.description}
            `;
   writeToFile('README.md',answersData)
    // Further processing of answersData
    // ...
});

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, err => {
        if (err) {throw err;
    } else {
        console.log('README created successfully')}
});
}

// TODO: Create a function to initialize app
// function init() {
//     writeToFile()
// }

// // Function call to initialize app
// init();
