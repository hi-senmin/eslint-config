
### 发布更新

- release

1. 默认版本发布
```bash
npm run release
```

当前 package.json version 版本最后一位 +1 后，并发布版本包


2. 指定版本发布

```bash
# 如想发布 2.2.2版本的包
npm run release -- version=2.2.2

# 不能发布比当前版本更低的包！！！
```

**注意**：

    npm unpublish @senmin/eslint-config@<version> --registry  https://xxx.com

    npm unpublish 命令只能删除 72 小时以内发布的包

    npm unpublish 删除的包，在 24 小时内不允许重复发布


### 依赖

后续需要新增的依赖配置最好将依赖添加到 dependencies，避免项目中没有安装

------
------

## 项目接入步骤

#### 1. 配置私服 npm 镜像源

- 根目录新建npm源配置文件 .npmrc

  推荐该方法，一劳永逸🐂

```
  registry=https://registry.npm.taobao.org/
```


#### 2. 项目安装 eslint-config 依赖
勿忘第一步 🙅🏻‍♀️

```bash
# 安装
npm i @senmin/eslint-config -D

# 更新
npm update @senmin/eslint-config
```

#### 3. 接入配置
根目录新建文件 🚀

- .prettierrc.js

```js
module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾不需要逗号
  trailingComma: 'all',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'auto',
};
```

- .eslintrc.js
使用的配置文件
```js
module.exports = {
  extends: ['@senmin/eslint-config/vue'],
};
```

- .eslintignore

忽略检查的文件

```
.vscode
dist
templates
node_modules
```

