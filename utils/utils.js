const question = [
    {
        name: 'projectName',
        required: true,
        message: '请输入项目名称'
    },
    {
        name: 'author',
        message: '请输入作者姓名'
    },
    {
        name: 'description',
        message: '请输入项目名称',
        default: 'a react project'
    },
    {
        type: 'confirm',
        name: 'ifInstall',
        message: '是否需要安装npm依赖?',
        default: true
    },
    {
        type: 'list',
        name: 'installWay',
        message: 'Choose the tool to install',
        choices: [
            'npm', 'cnpm'
        ],
        when: function (answer) {
            if (answer.ifInstall) {
                return true;
            }
        }
    }
];
module.exports = {
    question
};
