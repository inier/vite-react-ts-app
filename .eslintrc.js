module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'max-len': ['error', 150, 2], // 一行的字符不能超过100

    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // 禁止缩进错误
    indent: 0,
    // 关闭不允许使用 no-tabs
    'no-tabs': 'off',
    'no-console': 1,
    // 设置不冲突 underscore 库
    'no-underscore-dangle': 0,
    // 箭头函数直接返回的时候不需要 大括号 {}
    'arrow-body-style': [2, 'as-needed'],
    'no-alert': 'error',

    // 设置是否可以重新改变参数的值
    'no-param-reassign': 0,
    // 允许使用 for in
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    // 不需要每次都有返回
    'consistent-return': 0,
    // 允许使用 arguments
    'prefer-rest-params': 0,
    // 允许返回 await
    'no-return-await': 0,
    // 不必在使用前定义 函数
    'no-use-before-define': 0,
    // 允许代码后面空白
    'no-trailing-spaces': 0,

    // 有一些 event 的时候，不需要 role 属性，不需要其他解释
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    // 类成员之间空行问题
    'lines-between-class-members': 0,

    // 不区分是否在 despendencies
    'import/no-extraneous-dependencies': 0,
    // 引用时候根据根目录基础
    'import/no-unresolved': 0,

    // jsx > 紧跟着属性
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    // 不区分是否是 无状态组件
    'import/extensions': ['off', 'always', { js: 'never', ts: 'never', tsx: 'never', vue: 'never' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],

  },
};
