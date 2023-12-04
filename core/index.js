module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  rules: {
    //  prettier 格式化 jsx 中的 html 结构部分 & template
    // 解决 prettier 与 eslint 冲突配置
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
      },
    ],

    // https://eslint.org/docs/rules/no-console
    "no-console": "warn",

    // https://eslint.org/docs/latest/rules/no-debugger
    "no-debugger": "error",

    // https://eslint.org/docs/latest/rules/max-lines#rule-details
    /* 代码不能超所 1500 行 */
    "max-lines": [
      "warn",
      {
        max: 1500,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    "max-len": ["error", { code: 150, ignoreComments: true }],

    'no-useless-escape': 'off',

    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ],

    // https://eslint.org/docs/latest/rules/no-new
    "no-new": "off",

    // https://eslint.org/docs/rules/no-case-declarations
    "no-case-declarations": "off",

    // https://eslint.org/docs/rules/func-names
    "func-names": "off",

    // https://eslint.org/docs/rules/no-plusplus
    "no-plusplus": "off",

    // https://eslint.org/docs/rules/no-nested-ternary
    "no-nested-ternary": "off",

    // https://eslint.org/docs/rules/no-shadow
    "no-shadow": "off",

    // https://eslint.org/docs/latest/rules/radix#rule-details
    "radix": ["error", "as-needed"],

    // https://eslint.org/docs/latest/rules/prefer-destructuring
    "prefer-destructuring": ["error", { object: true, array: false }],

    // https://eslint.org/docs/latest/rules/consistent-return
    "consistent-return": "off",

    // https://eslint.org/docs/latest/rules/no-param-reassign
    "no-param-reassign": "warn",

    // https://eslint.org/docs/latest/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message: "Don't use 'for...in' loops. Use 'for...of' instead.",
      },
      {
        selector: "WithStatement",
        message: "'with' statements are not allowed.",
      },
    ],

    // https://eslint.org/docs/rules/no-unused-expressions
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    "import/no-unresolved": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    "import/prefer-default-export": "off",

    /* import .后缀 */
    "import/extensions": "off",

    "import/no-extraneous-dependencies": "off",

    // 检测导入语句中模块的排列顺序是否符合指定的规范
    "import/order": ["error", {
      "groups": [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling"
      ]
    }],

    // https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-dynamic-require.md
    "import/no-dynamic-require": "off"
  },
};
