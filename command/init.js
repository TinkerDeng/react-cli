'use strict';
const exec = require('child_process').exec;
const fs = require('fs');
const logSymbols = require('log-symbols');
const ora = require('ora');
const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');
const config = require('../templates');
const chalk = require('chalk');

//fs.existsSync("路径");  //判断一个路径是否存在，存在返回true，否则返回false
// process.cwd() //获取当前文件的路径
module.exports = () => {
    co(function* () {
        // 处理用户输入
        let tplName = yield prompt('模板名称: ');
        let projectName = yield prompt('项目名称: ');
        let gitUrl;
        let branch;
         if (!config.tpl[tplName]) {
             console.log("\n");
             console.log(logSymbols.warning, chalk.yellow('模板不存在!'));
             console.log(chalk.blue(`请执行${chalk.white('react-cli list')}查看模板名称`));
             process.exit();
         }
        gitUrl = config.tpl[tplName].url;
        branch = config.tpl[tplName].branch;

        // git命令，远程拉取项目并自定义项目名
        let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`;
        const spinner = ora({
            spinner: {
                "interval": 80,
                "frames": [
                    "⠋",
                    "⠙",
                    "⠚",
                    "⠞",
                    "⠖",
                    "⠦",
                    "⠴",
                    "⠲",
                    "⠳",
                    "⠓"
                ]
            },
            text: "开始生成中，请稍等..."
        });
        spinner.start();
        exec(cmdStr, (error, stdout, stderr) => {
            spinner.stop();
            if (error) {
                console.log("\n");
                console.log(chalk.red('git地址不存在'));
                console.log(chalk.red('请查看列表GIT地址是否正确'));
                process.exit();
            }
            console.log("\n");
            console.log(logSymbols.success,chalk.green('项目生成成功'));
            console.log("\n");
            console.log(`请执行cd ${projectName} && npm install \n`);
            process.exit();
        });
    });
};