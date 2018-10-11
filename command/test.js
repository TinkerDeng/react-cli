const fs = require("fs");
const inquirer = require("inquirer");
const download = require('download-git-repo');
const questions = [{
    type: "input",
    name: "projectName",
    message: "your project name",
    default: function () {
        return "aa";
    }
}];
module.exports = () => {
    download('TinkerDeng/help', "aa", (err) => {
        shell.exec("cd " + name + " && npm i", function (err, stdout, stderr) {
            if (err) {
                spinner.fail();
                console.log(symbols.error, chalk.red(err));
            }
            else {
                spinner.succeed();
                console.log(symbols.success, chalk.green('The object has installed dependence successfully!'));
            }
        });
    })
}