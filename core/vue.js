module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    require.resolve("./index"),
    'plugin:vue/essential',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    // https://eslint.vuejs.org/rules/attributes-order.html
    "vue/attributes-order": "error",

    // https://eslint.vuejs.org/rules/html-comment-indent.html
    "vue/html-comment-indent": ["error", 2],

    // https://eslint.vuejs.org/rules/html-button-has-type.html
    "vue/html-button-has-type": "off",

    // https://eslint.vuejs.org/rules/order-in-components.html
    "vue/order-in-components": "error",

    // https://eslint.vuejs.org/rules/no-multiple-slot-args.html
    "vue/no-multiple-slot-args": "error",

    // https://eslint.vuejs.org/rules/no-v-html.html
    "vue/no-v-html": "warn",

    // https://eslint.vuejs.org/rules/this-in-template.html
    "vue/this-in-template": ["error", "never"],

    // https://eslint.vuejs.org/rules/component-name-in-template-casing.html
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],

    // https://eslint.vuejs.org/rules/custom-event-name-casing.html
    "vue/custom-event-name-casing": [
      "error",
      "kebab-case",
      {
        ignores: [],
      },
    ],

    // https://eslint.vuejs.org/rules/html-comment-content-newline.html
    "vue/html-comment-content-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always",
      },
      {
        exceptions: [],
      },
    ],

    // https://eslint.vuejs.org/rules/html-comment-content-spacing.html
    "vue/html-comment-content-spacing": [
      "error",
      "always",
      {
        exceptions: [],
      },
    ],

    // https://eslint.vuejs.org/rules/match-component-file-name.html
    "vue/match-component-file-name": "off",

    // https://eslint.vuejs.org/rules/no-restricted-component-options.html
    "vue/no-restricted-component-options": [
      "error",
      {
        name: "filters",
        message: "禁止使用 filters 过滤器，请使用 computed 计算属性代替...",
      },
    ],

    // https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
    "vue/v-on-event-hyphenation": [
      "error",
      "always",
      {
        autofix: true,
        ignore: [],
      },
    ],

    // https://eslint.vuejs.org/rules/no-restricted-static-attribute.html
    "vue/no-restricted-static-attribute": [
      "error",
      {
        key: "style",
        message: 'Using "style" is not allowed. Use ":style" instead.',
      },
    ],

    // https://eslint.vuejs.org/rules/html-self-closing.html
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],

    "vue/multi-word-component-names": "off",
  },
}
