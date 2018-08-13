module.exports = {
  env: {
    es6: true,
    node: true
  },
  plugins: [
    'ava',
    'import',
    'node',
    'promise'
  ],
  extends: [
    'standard',
    'plugin:ava/recommended'
  ],
  rules: {
    'dot-notation': 'error',
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1 }],
    'no-unneeded-ternary': 'error',
    'no-var': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'error',
    'object-shorthand': 'error',
    'operator-assignment': 'error',
    'prefer-const': 'error',
    'require-await': 'error',
    'sort-vars': 'warn',
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }]
  }
}
