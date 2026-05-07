module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['eslint:recommended'],
    rules: {
        'no-unused-vars': 'warn',
        'no-console': 'off',
    },
}