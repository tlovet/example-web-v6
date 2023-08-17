module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  // extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
};
