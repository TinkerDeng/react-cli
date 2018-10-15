#! /usr/bin/env node
const commander = require('commander');
const package = require('../package'); // 引入package.json文件
const argv = process.argv; // 获取命令行参数

commander
    .version(package.version, '-v,--version,-V');

commander
    .command('list')
    .description('模板列表')
    .alias('l')
    .action(() => {
        require('../command/list.js')();
    });

commander
    .command('add')
    .description('添加项目模板')
    .alias('a')
    .action(() => {
        require('../command/add.js')();
    });

commander
    .command('delete')
    .description('添加项目模板')
    .alias('a')
    .action(() => {
        require('../command/delete.js')();
    });

commander
    .command('init <name>') //<name>用于传参
    .description('初始化相关模板')
    .alias('a')
    .action((name) => {
        require('../command/init.js')(name);
    });

commander
    .command('move')
    .description('移动项目模板')
    .alias('m')
    .action(() => {
        require('../command/move.js')();
    });

commander.parse(argv); // commander解析命令行输入的参数
if (!commander.args.length) {
    commander.help(); // 默认显示帮助信息
}

