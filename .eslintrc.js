module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "react-app",
    "react-app/jest",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "no-plusplus": 0,
    "react/no-array-index-key": 0,
    "react/button-has-type": 0,
    "no-shadow": 0,
    "jest/valid-expect": 0,
    "react/react-in-jsx-scope": 0,
  },
};
