module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        "endOfLine": "lf",
        "printWidth": 200,
        "semi": false,
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "none",
        "useTabs": false
      }
  ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  }
}
