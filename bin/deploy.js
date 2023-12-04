#!/usr/bin/env node

const https = require('https');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const currentVersion = getVersion()

let userName = ""
/* 发布后发送企微机器人消息 */
function sendMessage() {
  // 机器人 webhook 地址
  const url = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxx';

  const version = getVersion()
  // 要发送的消息对象
  const message = {
    "msgtype": "markdown",
    "markdown": {
      "content": `# 发布成功 🚀 \n` +
        `提示: <font color=\"comment\">eslint config 配置有更新</font>\n` +
        (userName ? `发布人: <font color=\"comment\">${userName}</font>` : '') +
        `最新版本号: <font color=\"info\">v${currentVersion}  --> v${version}</font>\n` +
        `<font color="warning">请相关人员及时更新配置</font>`,
    },
  }

  // 将消息对象转换为 JSON 格式，并设置请求头部信息
  const postData = JSON.stringify(message);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  // 发送 POST 请求
  const req = https.request(url, options, res => {
    console.log(`状态码: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', chunk => console.log(`响应主体: ${chunk} `));
  });

  req.on('error', error => {
    console.error(`请求遇到问题: ${error.message} `);
  });

  // 将消息数据写入请求主体
  req.write(postData);
  req.end();
}


/* 获取当前的版本号 */
function getVersion() {
  // 读取 package.json 文件
  const pkgPath = path.join(__dirname, '../package.json'); // 假设 package.json 文件在当前目录下
  const pkgData = fs.readFileSync(pkgPath, 'utf8');
  const pkg = JSON.parse(pkgData);
  return pkg.version;
}

/* 更新 package.json 中的版本号 */
function updateVersion(version) {
  if (!version) return

  // 读取 package.json 文件并解析为对象
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')));

  // 设置新的版本号
  packageJson.version = version;

  // 将修改后的对象转换为字符串并写入 package.json 文件
  fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(packageJson, null, 2));
}

// 获取命令行参数
function getCommandOptions() {
  const args = process.argv.slice(2);
  if (args) {
    const options = args.reduce((result, item) => {
      const [key, value] = item.split('=');
      result[key] = value;
      return result;
    }, {});
    return options || {}
  }
  return {}
}

/* 发布处理 */
function handleRelease() {
  const options = getCommandOptions()
  console.log('options', options);

  const version = options.version

  let command = 'npm version patch --no-git-tag-version && npm publish'
  if (version) {
    updateVersion(version)
    command = 'npm publish'
  }

  // 执行 npm  发布命令
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`发布时出错: ${error} `);
      return;
    }

    // sendMessage()

    console.log(`stdout: ${stdout} `);
    console.error(`stderr: ${stderr} `);
  });
}

function checkNpmStatus() {
  exec('npm whoami', (error, stdout, stderr) => {
    console.log('err', error);
    if (error) {
      console.error(`❌ npm 登录态异常，请检查!!!❌  `);
      console.log(error);
      return;
    }

    userName = stdout

    handleRelease()
  });
}

/* 检查发布人 */
checkNpmStatus()
