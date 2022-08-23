require('@bigcommerce/eslint-config/patch');

module.exports = {
  root: true,
  extends: ['@bigcommerce/eslint-config'],
  parserOptions: {
    project: ['./apps/dashboard/tsconfig.json', './apps/widget/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'apps/*/tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/unified-signatures': 'off',
        'func-names': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-named-default': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/dynamic-import-chunkname': 'off',
        'jsdoc/require-param-type': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/aria-role': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-pascal-case': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'array-callback-return': 'off',
        complexity: 'off',
        'no-param-reassign': 'off',
        'no-restricted-syntax': 'off',
        'no-restricted-globals': 'off',
        'no-plusplus': 'off',
        'no-nested-ternary': 'off',
        'no-underscore-dangle': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        radix: 'off',
      },
    },
    {
      files: ['apps/widget/**/*.ts', 'apps/widget/**/*.tsx', 'apps/widget/**/*.js'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
