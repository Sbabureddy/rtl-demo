module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "!src/index.js",
    "!src/reportWebVitals.js",
    "src/**/*.{js,jsx}",
    "!<rootDir>/node_modules/",
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  coverageReporters: ["json", "text", "html", "lcov"],
};
