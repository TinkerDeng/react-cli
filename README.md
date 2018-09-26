## 目录

* [简介](#简介)
* [使用](#使用)
    * [在线使用](#在线使用)
    * [本地使用](#本地使用)
* [相关库](#相关库)
* [node相关模块](#node相关模块)

### 简介

> `react-cli`是一个轻量级的前端项目生成工具，可快速生成模板项

### 使用

#### 在线使用

```git
    npm install -g react-cli
    react-cli list
    react-cli delete
    react-cli init
    react-cli add
```

#### 本地使用

```git
    git clone
    npm link
    ...
```

### 相关库

1. `commander`:"命令行处理工具，获取命令行传参"
1. `Inquirer`:"终端和用户交互,可以选择"
1. `tty-table`:"终端生成类似表格的样式"
1. `request`:"简化的http请求客户端"
1. `node-cmd`:"操作shell脚本"
1. `copy-dir`:"将文件或者目录复制到另一个路径,如果不存在，自动创建"
1. `ncp`:"异步递归文件和目录复制"
1. `mkdirp`:"递归创建目录"
1. `rimraf`:"删除文件目录"
1. `co`:"用同步的方式编写异步编程"
1. `co-prompt`:"终端用户输入"
1. `read-metadata`:"用于读取json或者yaml元数据文件并返回一个对象"
1. `multimatch`:"可以支持多个条件的匹配"
1. `yargs`:"处理命令行参数"
1. `tildify`:"将绝对路径转换成带波浪符的路径"
1. `chalk`:"设置终端颜色"
1. `colors`:"设置终端颜色"
1. `cli-color`:"设置终端颜色"
1. `consolidate`:"模板引擎整合库,支持各种模板引擎的渲染"
1. `semver`:"语义版本规范，主版本号.次版本号.修订号"
1. `minimatch`:"glob匹配器"
1. `async`:"非常强大的异步处理工具"
1. `handlebars`:"模板引擎，将用户提交的信息动态填充到文件中{{name}}"
1. `user-home`:"获取用户的根目录"
1. `download`:"下载并解压文件 =>  github.com/kevva/download/"
1. `download-git-repo`:"下载远程仓库至本地，支持github，gitlab，bitbucket"
1. `metalsmith`:"对下载的文件进行处理,插件化的静态网站生成器"
1. `Handlebars`:"模板引擎"
1. `poi`:"零配置js打包器"
1. `w7`:"dev server html服务器"
1. `fs-extra`:"再fs基础上增加了一些新的方法，直接替换fs，更好用"
1. `browser-sync`:"热加载"
1. `cross-spawn`:"解决cli跨平台不兼容的问题"
1. `readline`:"命令行输入的api"
1. `progress`:"渲染进度"
1. `shelljs`:"重新包装了 child_process,调用系统命令更加方便。它需要安装后使用"
1. `ora`:"终端实现loading效果"
1. `log-symbols`:"各种日志级别的彩色的符号，可以在终端显示√或者x的图标"

### node相关模块

1. `fs`:"操作文件模块"
2. `path`:"处理文件路径的工具函数"
3. `process`:"nodejs进程信息和控制的全局对象"
4. `superagent`:""
5. `child_process`:"创建子进程,执行unix系统命令,比如完成npm install"
6. `util`:"工具方法"
