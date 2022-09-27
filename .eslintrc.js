module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jquery: true
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
    'no-console': 'off',
    'prettier/prettier': 0,
    "vue/require-prop-types":0,
    "vue/no-unused-components":'off',
    "object-shorthand":'off',
    'camelcase': 'off',
    'dot-notation': 'off',
  },
}
