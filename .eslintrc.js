module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'no-trailing-spaces': 0,
    'vue/component-name-in-template-casing': ["error",
      "kebab-case",
      {
        "ignores": []
      }
    ],
    'vue/no-v-html': 'off',
    'vue/html-closing-bracket-spacing': 0,
    'vue/max-attributes-per-line': [2, {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }]
  },
  globals: {
    THREE: true
  }
}
