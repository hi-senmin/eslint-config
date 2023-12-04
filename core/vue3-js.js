module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    require.resolve("./index"),
    require.resolve("./vue"),
  ],
  rules: {
    'no-unused-vars': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-use-v-if-with-v-for': 'off'
  }
}
