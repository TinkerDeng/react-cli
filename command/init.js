'use strict';
const exec = require('child_process').exec;
const fs = require('fs');
const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');
const config = require('../templates');
const chalk = require('chalk');
/**
 * 监听help时间
 */
process.on('--help', function () {
    console.log('帮助信息');
});

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
            console.log(chalk.red('\n × Template does not exit!'));
            process.exit();
        }

        gitUrl = config.tpl[tplName].url;
        branch = config.tpl[tplName].branch;

        // git命令，远程拉取项目并自定义项目名
        let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`;

        console.log(chalk.white('\n Start generating...'));

        exec(cmdStr, (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                process.exit();
            }
            console.log(chalk.green('\n √ Generation completed!'));
            console.log(`\n cd ${projectName} && npm install \n`);
            process.exit();
        });
    });
};