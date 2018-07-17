#! /usr/bin/env node
const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');

program
  .version('0.1.0')
  .option('-i, init [name]', '初始化wepy项目')
  .parse(process.argv)

if(program.init) {
  const spinner = ora('正在拉取项目').start();
  download('EpplaLee/wepy_init', program.init, function() {
    if(!err) {
      //  success
      console.info(chalk.blueBright('拉取成功'));
    } else {
      // err
      console.info(err)
    }
  })
}