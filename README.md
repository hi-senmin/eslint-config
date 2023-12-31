### 文件描述

- index.js
全部项目一些共同的配置

主要是以 airbnb-base 风格为主

airbnb-base 官网地址： https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base

### 项目安装 eslint-config 依赖
勿忘第一步 🙅🏻‍♀️

```bash
# 安装
npm i @senmin/eslint-config -D

# 更新
npm update @senmin/eslint-config
```


- vue.js
  vue  项目接 vue.js

```js
// .eslintrc.js
module.exports = {
  extends: ['@senmin/eslint-config/vue'],
};
```

- react.js

  react项目

```js
// .eslintrc.js
module.exports = {
  extends: ['@senmin/eslint-config/react'],
};
```

- update

接入的项目更新版本依赖

```bash
npm update @senmin/eslint-config
```


#### 接入配置
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



### ⚠️⚠️⚠️警告⚠️⚠️⚠️

 安装使用前请把项目中的其他 eslint 依赖包尽数移除，避免冲突导致lint不生效的异常！！！