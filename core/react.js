module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [require.resolve("./index"), "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-one-expression-per-line": "off", // 关闭必须标签内换行的写法
    "react/no-danger": "off", // 关闭危险标签不给用的提示-比如dangerouslySetInnerHTML
    "react/prop-types": 0, // 防止在React组件定义中丢失props验证
    "react/forbid-prop-types": "off", // props可以传递这些参数
    "react/jsx-props-no-spreading": "off", // 必读定义props
    "react/function-component-definition": "off",
    "react/jsx-closing-tag-location": "off", // 标签没对应上报错
    "react/jsx-first-prop-new-line": "off", // 毫无意义
    "react/jsx-max-props-per-line": "off", // 毫无意义
    "react/jsx-indent-props": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-wrap-multilines": "off",
    "react/destructuring-assignment": "off", // 可以使用 a.b，而不是使用 { b } = a，单独使用 b
    "react/no-array-index-key": "off", // 允许使用如 0, 1, 2, ...来作为array列表的索引，这个设置有疑问？
    "react/jsx-curly-brace-presence": "off", // 允许 classN={'string'} 的存在
    "react/jsx-filename-extension": [0],
  },
};
