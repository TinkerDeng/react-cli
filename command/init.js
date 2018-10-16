'use strict';
const fs = require('fs');
const logSymbols = require('log-symbols');
const ora = require('ora');
const config = require('../templates');
const chalk = require('chalk');
const handlebars = require('handlebars');
const customUtils = require('../utils/utils');
const inquirer = require('inquirer');
const shell = require('shelljs');
const download = require('download-git-repo');
const spinner = ora({
    spinner: {
        'interval': 80,
        'frames': [
            '⠋',
            '⠙',
            '⠚',
            '⠞',
            '⠖',
            '⠦',
            '⠴',
            '⠲',
            '⠳',
            '⠓'
        ]
    },
    text: '开始生成中，请稍等...'
});

module.exports = (name) => {
    if (config && config.tpl && config.tpl[name]) {
        inquirer.prompt(customUtils.question).then((answer) => {
            const projectName = answer.projectName;
            if (!fs.existsSync(projectName)) {
                spinner.start();
                download(config.tpl[name]['url'], answer.projectName, (err) => {
                    spinner.stop();
                    if (err) {
                        console.log(logSymbols.success, chalk.red('项目下载失败'));
                        console.log(chalk.red(err));
                    } else {
                        const fileName = `${answer.projectName}/package.json`;
                        const meta = {
                            name: answer.projectName,
                            description: answer.description,
                            author: answer.author
                        };
                        if (fs.existsSync(fileName)) {
                            const content = fs.readFileSync(fileName).toString();
                            const result = handlebars.compile(content)(meta);
                            fs.writeFileSync(fileName, result);
                        }
                        if (answer.ifInstall && answer.installWay === 'npm') {
                            let spinner = ora('Installing...');
                            spinner.start();
                            shell.exec('cd ' + answer.projectName + ' && cnpm i', function (err, stdout, stderr) {
                                if (err) {
                                    console.log(logSymbols.success, chalk.red('项目下载失败'));
                                }
                                else {
                                    console.log(logSymbols.success, '项目下载成功ly!');
                                    console.log(chalk.red('请查看readme.md文件查看帮助文档'));
                                }
                            });
                        } else if (answer.ifInstall && answer.installWay === 'cnpm') {
                            let spinner = ora('Installing...');
                            spinner.start();
                            shell.exec('cd ' + answer.projectName + ' && cnpm i', function (err, stdout, stderr) {
                                if (err) {
                                    console.log(logSymbols.success, chalk.red('项目下载失败'));
                                }
                                else {
                                    console.log(logSymbols.success, '项目下载成功ly!');
                                    console.log(chalk.red('请查看readme.md文件查看帮助文档'));
                                }
                            });
                        } else {
                            console.log(logSymbols.success, '项目下载成功ly!');
                            console.log(chalk.red('请查看readme.md文件查看帮助文档'));
                        }
                    }
                });
            } else {
                console.log('项目名称已经存在，请换个名称');
            }
        });
    } else {
        console.log(chalk.red('模板名称不存在'));
        console.log(chalk.red(`请执行 react-cli list 查看模板列表`));
        process.exit();
    }
};
