module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/reportWebVitals.js",
  ],
  coveragePathIgnorePatterns: ["src/index.js", "src/reportWebVitals.js"],
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
