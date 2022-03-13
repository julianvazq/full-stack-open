module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: ['off', 2],
        'linebreak-style': ['off', 'unix'],
        quotes: ['error', 'single'],
        semi: ['off'],
        'no-unused-vars': ['warn'],
    },
};
