module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
    'sort-destructure-keys',
    'unused-imports',
  ],
  ignorePatterns: ['**/assets/*', '**/*.svg', '**/*.scss', '**/*.css'],
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { 'afterColon': true }],
    'eol-last': 'error',
    'eqeqeq': 'warn', // require === over ==. Should this be a warning or nothing?
    'max-depth': ['warn', 6],
    'max-len': ['warn', 150],
    'max-lines': ['warn', 200],
    'no-buffer-constructor': 'off',
    'no-case-declarations': 'off',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-extra-boolean-cast': 'off',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-prototype-builtins': 'off',
    'no-trailing-spaces': 'error',
    'no-use-before-define': 'warn',
    'no-unused-vars': ['warn', { args: 'all', argsIgnorePattern: '^_' }],
    'no-var': 'error',
    'prefer-const': 'error',
    'react/jsx-indent-props': [2, 2],
    'react/display-name': 'off',
    'react/no-children-prop': 'warn',
    'react/prop-types': 'off',
    'react/jsx-key': 'warn',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': ['error', {
      'callbacksLast': true,
      'noSortAlphabetically': true
    }],
    'react/jsx-newline': ['error', { 'prevent': true }],
    'react/sort-prop-types': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'require-jsdoc': 'off',
    'sort-destructure-keys/sort-destructure-keys': 2,
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never'
    }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-curly-spacing': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-one-expression-per-line': ['error', { 'allow': 'single-child' }]
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to 'createReactClass'
      pragma: 'React', // Pragma to use, default to 'React'
      fragment: 'Fragment',
      // Fragment to use (may be a property of <pragma>), default to 'Fragment'
      version: 'detect',
      // React version. 'detect' automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to 'detect' in the future
      flowVersion: '0.53', // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes,
      // e.g. `forbidExtraProps`.
      // If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components,
      // e.g. Mobx `observer` function.
      // If this isn't set, components wrapped by these functions will be skipped.
      'observer', // `property`
      { property: 'styled' }, // `object` is optional
      { property: 'observer', object: 'Mobx' },
      { property: 'observer', object: '<pragma>' },
      // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
};
