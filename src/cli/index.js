const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');
const Utils = require('./utils');
const debug = require('debug');

const d = debug('draft');
let cl = console.log;

function success(filepath) {
  cl(chalk.white.bgGreen.bold(`Done! File created at ${filepath}`));
}
const run = async () => {
  // ask questions
  const answers = await askQuestions();
  const {FILENAME, EXTENSION} = answers;

  // create the file
  const filePath = Utils.createFile(FILENAME, EXTENSION);
  // show success message
  success(filePath);
}

function askQuestions() {
  const questions = [
    {
      name: 'FILENAME',
      type: 'input',
      message: 'What is the name of the file without extension?',
    },
    {
      type: 'list',
      name: 'EXTENSION',
      message: 'What is the file extension?',
      choices: ['.rb', '.js', '.php', '.css'],
      filter: function(val) {
        return val.split('.')[1];
      },
    },
  ];
  return inquirer.prompt(questions);
}
function init() {
  cl(
    chalk.green(
      figlet.textSync('Node f*cking JS', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      }),
    ),
  );
}

module.exports = {init, run};
