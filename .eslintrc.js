module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: [
    'react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'eol-last': 2,
    eqeqeq: [2, 'always'],
    'import/extensions': 2,
    indent: [2, 2, { SwitchCase: 1 }],
    'jsx-quotes': 2,
    'max-len': [2, { code: 150, ignoreStrings: true }],
    'max-lines': [2, { max: 360, skipBlankLines: true }],
    'no-trailing-spaces': 2,
    'no-var': 2,
    'object-curly-spacing': [2, 'always', { arraysInObjects: false }],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    'react/display-name': [2, { ignoreTranspilerName: false }],
    'react/no-danger': 2,
    'react/no-multi-comp': 2,
    'react/no-unknown-property': 2,
    'react/no-unused-state': 2,
    'react/prefer-es6-class': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
    semi: [2, 'always'],
  },
  globals: {},
};