module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    rules: {
        'no-debugger': 'off',
        'no-console': 0,
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
    },
};
