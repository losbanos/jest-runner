module.exports = {
    root: true,

    env: {
        node: true,
        jest: true
    },

    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript'
    ],

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'comma-dangle': [2, 'never'],
        // 'import/extensions': [2, 'never'],
        'indent': [2, 4],
        'no-plusplus': [0, 'never'],
        'lines-between-class-members': [0],
        'func-names': ['error', 'never'],
        'linebreak-style': ['error', 'unix'],
        'no-restricted-syntax': ['off', 'ForOfStatement'],
        'object-curly-newline': ['off', 'never'],
        'object-curly-spacing': ['error', 'never'],
        'arrow-parens': ['error', 'as-needed']
    },

    parserOptions: {
        parser: '@typescript-eslint/parser',
    }
};
