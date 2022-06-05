module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    semi: 'off',
    'no-console': 'off',
    'no-else-return': 'warn',
    'no-nested-ternary': 'warn',
    'consistent-return': 'off',
    'eqeqeq': 'warn',
    'react/jsx-no-bind': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'react/require-default-props': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/no-array-index-key': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'object-shorthand': 'warn',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': 'warn',
    'react/destructuring-assignment': 'warn',
    'one-var': 'warn',
    'no-lonely-if': 'warn',
    'prefer-template': 'off',
    'array-callback-return': 'off',
    'no-param-reassign': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    // 'perfect-const': 'warn',
    'no-shadow': 'warn',
    'no-useless-escape': 'warn',
    'no-plusplus': 'off',
    'camelcase': 'off',
    'vars-on-top': 'warn',
    'import/order': 'warn',
    'react/jsx-no-useless-fragment': 'off',
    'no-undef': 'warn',
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'warn',
    'newline-before-return': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'prettier/prettier': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'import/no-unresolved': ['warn', { caseSensitive: false }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-await-in-loop': 'off'
  },
};
