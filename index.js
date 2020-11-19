const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My project name is ${answers.name}</h1>
    <h3>Welcome <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
    <li class="list-group-item">My project name is: ${answers.project}</li>
    <li class="list-group-item">Description:${answers.description}</li>
    <li class="list-group-item">Installation:${answers.installation}</li>
    <li class="list-group-item">Instruction:${answers.instruction}</li>
    <li class="list-group-item">Usage:${answers.usage}</li>
    <li class="list-group-item">contributor:${answers.contributor}</li>
    <li class="list-group-item">test:${answers.test}</li>
    <li class="list-group-item">license:${answers.license}</li>
    <li class="list-group-item">www.github.com/ ${answers.gitthub}</li>
    <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>

   
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using async/await and try/catch
const init = async () => {

  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the project?',
      },
      
      {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation of your project',
      },
      {
        type: 'input',
        name: 'instruction',
        message: 'What are the instruction for the project?',
      },
      
      {
        type: 'input',
        name: 'usage',
        message: 'What you like to application to be usage?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Who are the contributor?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What you need to test the application?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Under which licence you work with ?',
      },
    
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username?',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL?',
      },
    ]);

    const html = generateHTML(answers);

    fs.writeFileSync ('index.html', html);

    console.log('Successfully wrote to index.html');
  } catch (err) {
    console.log(err);
  }
};

init();