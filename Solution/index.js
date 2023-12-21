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
    },
    {   
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project?"
    },
    {   
        type: 'input',
        name: 'credits',
        message: "List your collaborators"
    },
    {   
        type: 'input',
        name: 'license',
        message: "Which licenses did you use?"
    }
])
.then(({title, description, installation, credits, license}) => {
    let answersData = 
`
# ${title}
    
## Description
${description}

## Installation
${installation}

## Credits
${credits}

## License
${license}
`;
   
    // Further processing of answersData
    // ...
// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, err => {
        if (err) {throw err;
    } else {
        console.log('README created successfully')}
});
}})

writeToFile('README.md',answersData)

