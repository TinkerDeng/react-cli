'use strict';
const inquirer = require('inquirer');
const config = require('../templates.json');
const TableRender = require('../utils/table');
module.exports = () => {
    const tpl = config.tpl;
    TableRender(tpl);
    process.exit();
};